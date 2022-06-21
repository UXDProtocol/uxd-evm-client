import { BigNumber, Contract, ContractTransaction, providers, Signer } from 'ethers';
import { MintedEventObject, RedeemedEventObject, UXDControllerContract, UXDController as UXDControllerNamespace } from '../artifacts/types/UXDController';
import { ERC20 as ERC20Contract, ApprovalEventObject, TransferEventObject } from '../artifacts/types/ERC20';
import { Subject } from 'rxjs';
import { ERC20__factory, UXDController__factory } from '../artifacts/types';

export interface CollateralInfo {
  symbol?: string;
  token: string;
  redeemable: BigNumber;
  minted: BigNumber;
}

export class UXDController {
  protected provider: providers.Provider;

  // internal contracts
  protected controllerContract: UXDControllerContract;
  protected uxdContract: ERC20Contract;

  // clients can listen to events on these subjects
  public readonly mintSubject: Subject<MintedEventObject> = new Subject<MintedEventObject>();
  public readonly redeemSubject: Subject<RedeemedEventObject> = new Subject<RedeemedEventObject>();
  public readonly uxdApprovalSubject: Subject<ApprovalEventObject> = new Subject<ApprovalEventObject>();
  public readonly uxdTransferSubject: Subject<TransferEventObject> = new Subject<TransferEventObject>();

  constructor({
    provider,
    controllerAddress,
    uxdTokenAddress,
  }: {
    provider: providers.Provider;
    controllerAddress: string;
    uxdTokenAddress: string;
  }) {
    this.provider = provider;

    this.controllerContract = UXDController__factory.connect(controllerAddress, this.provider);
    this.uxdContract = ERC20__factory.connect(uxdTokenAddress, this.provider);

    this.registerEventListeners();
  }

  public mint({
    market,
    collateral,
    ethAmount,
    slippage,
    signer,
  }: {
    market: string;
    collateral: string;
    ethAmount: BigNumber;
    slippage: BigNumber;
    signer: Signer;
  }): Promise<ContractTransaction> {
    return this.controllerContract.connect(signer).mint(
      market,
      collateral,
      ethAmount,
      slippage
    );
  }

  public redeem({
    market,
    collateral,
    uxdAmount,
    slippage,
    signer,
  }: {
    market: string;
    collateral: string;
    uxdAmount: BigNumber;
    slippage: BigNumber;
    signer: Signer;
  }): Promise<ContractTransaction> {
    return this.controllerContract.connect(signer).redeem(
      market,
      collateral,
      uxdAmount,
      slippage
    );
  }

  public mintWithEth({
    market,
    ethAmount,
    slippage,
    signer,
  }: {
    market: string;
    ethAmount: BigNumber;
    slippage: BigNumber;
    signer: Signer;
  }): Promise<ContractTransaction> {
    return this.controllerContract.connect(signer).mintWithEth(
      market,
      slippage,
      {
        value: ethAmount,
      },
    );
  }

  public redeemEth({
    market,
    uxdAmount,
    slippage,
    signer,
  }: {
    market: string;
    uxdAmount: BigNumber;
    slippage: BigNumber;
    signer: Signer;
  }): Promise<ContractTransaction> {
    return this.controllerContract.connect(signer).redeemEth(market, uxdAmount, slippage);
  }

  // ???Rework returned infos???
  public async getCollateralInfo(): Promise<UXDControllerNamespace.CollateralInfoStructOutput[]> {
    return this.controllerContract.getCollateralInfo();
  }

  public approveUXD({
    spender,
    amount,
    signer,
  }: {
    spender: string;
    amount: BigNumber;
    signer: Signer;
  }): Promise<ContractTransaction> {
    return this.uxdContract.connect(signer).approve(spender, amount);
  }

  public approveToken({
    contractAddress,
    spender,
    amount,
    signer,
  }: {
    contractAddress: string;
    spender: string;
    amount: BigNumber;
    signer: Signer;
  }): Promise<ContractTransaction> {
    return ERC20__factory.connect(contractAddress, signer).connect(signer).approve(spender, amount);
  }

  public allowance({
    contractAddress,
    account,
    spender,
  }: {
    contractAddress: string;
    account: string;
    spender: string;
  }): Promise<BigNumber> {
    return ERC20__factory.connect(contractAddress, this.provider).allowance(account, spender);
  }

  public tokenBalance({
    contractAddress,
    account,
  }: {
    contractAddress: string;
    account: string;
  }): Promise<BigNumber> {
    return ERC20__factory.connect(contractAddress, this.provider).balanceOf(account);
  }

  public uxdTotalSupply(): Promise<BigNumber> {
    return this.uxdContract.totalSupply();
  }

  public mintedPerCollateral(token: string): Promise<BigNumber> {
    return this.controllerContract.mintedPerCollateral(token);
  }

  public redeemable(token: string): Promise<BigNumber> {
    return this.controllerContract.redeemable(token);
  }

  // ===== utils

  // Transform values in an array into an object with named attributes
  // Use the position of the key and the value to match
  protected arrayToObject<T extends Object>(keys: (keyof T)[], values: unknown[]): T {
    return keys.reduce((obj, value, index) => obj[value] = values[index] as any, {} as T);
  }

  // Utility function that converts an event object received from the contract to a subject
  protected registerEventListener<T>(contract: Contract, eventName: string, subject: Subject<T>, keys: (keyof T)[]): void {
    contract.on(eventName, async (args) => {
      subject.next(this.arrayToObject(keys, args));
    });
  }

  protected registerEventListeners() {
    this.registerEventListener<MintedEventObject>(this.controllerContract, 'Minted', this.mintSubject, ['account', 'base', 'quote']);
    this.registerEventListener<RedeemedEventObject>(this.controllerContract, 'Redeemed', this.redeemSubject, ['account', 'base', 'quote']);
    this.registerEventListener<ApprovalEventObject>(this.uxdContract, 'Approval', this.uxdApprovalSubject, ['owner', 'spender', 'value']);
    this.registerEventListener<TransferEventObject>(this.uxdContract, 'Transfer', this.uxdTransferSubject, ['from', 'to', 'value']);
  }
}
