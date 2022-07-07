import {
  BigNumber,
  Contract,
  ContractTransaction,
  ethers,
  providers,
  Signer,
} from "ethers";
import { Subject } from "rxjs";
import {
  MintedEventObject,
  RedeemedEventObject,
  UXDControllerContract,
} from "../artifacts/types/UXDController";
import {
  ERC20 as ERC20Contract,
  ApprovalEventObject,
  TransferEventObject,
} from "../artifacts/types/ERC20";
import { ERC20__factory, UXDController__factory } from "../artifacts/types";
import { encodePriceSqrt } from "./priceEncoder";

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

  // market to mint in
  private market: string;

  // clients can listen to events on these subjects
  public readonly mintSubject: Subject<MintedEventObject> =
    new Subject<MintedEventObject>();
  public readonly redeemSubject: Subject<RedeemedEventObject> =
    new Subject<RedeemedEventObject>();
  public readonly uxdApprovalSubject: Subject<ApprovalEventObject> =
    new Subject<ApprovalEventObject>();
  public readonly uxdTransferSubject: Subject<TransferEventObject> =
    new Subject<TransferEventObject>();

  constructor({
    provider,
    controller,
    redeemable,
    market,
  }: {
    provider: providers.Provider;
    controller: string;
    redeemable: string;
    market: string;
  }) {
    this.provider = provider;
    this.market = market;
    this.controllerContract = UXDController__factory.connect(
      controller,
      this.provider
    );
    this.uxdContract = ERC20__factory.connect(redeemable, this.provider);
  }

  public mint({
    amount,
    targetPrice,
    signer,
    collateral,
  }: {
    amount: number;
    targetPrice: number;
    signer: Signer;
    collateral?: string;
  }): Promise<ContractTransaction> {
    const ethAmount = ethers.utils.parseEther(amount.toString());
    const targetPriceX96 = encodePriceSqrt(targetPrice);
    if (collateral) {
      return this.mintWithERC20(ethAmount, targetPriceX96, signer, collateral);
    }
    return this.mintWithETH(ethAmount, targetPriceX96, signer);
  }

  private mintWithERC20(
    ethAmount: BigNumber,
    targetPriceX96: BigNumber,
    signer: Signer,
    collateral: string
  ): Promise<ContractTransaction> {
    return this.controllerContract
      .connect(signer)
      .mint(this.market, collateral, ethAmount, targetPriceX96);
  }

  private mintWithETH(
    ethAmount: BigNumber,
    targetPriceX96: BigNumber,
    signer: Signer
  ): Promise<ContractTransaction> {
    return this.controllerContract
      .connect(signer)
      .mintWithEth(this.market, targetPriceX96, { value: ethAmount });
  }

  public redeem({
    amount,
    targetPrice,
    signer,
    collateral,
  }: {
    amount: number;
    targetPrice: number;
    signer: Signer;
    collateral?: string;
  }): Promise<ContractTransaction> {
    const uxdAmount = ethers.utils.parseEther(amount.toString());
    const targetPriceX96 = encodePriceSqrt(targetPrice);
    if (collateral) {
      return this.redeemERC20(uxdAmount, targetPriceX96, signer, collateral);
    }
    return this.redeemEth(uxdAmount, targetPriceX96, signer);
  }

  private redeemERC20(
    uxdAmount: BigNumber,
    targetPriceX96: BigNumber,
    signer: Signer,
    collateral: string
  ): Promise<ContractTransaction> {
    return this.controllerContract
      .connect(signer)
      .redeem(this.market, collateral, uxdAmount, targetPriceX96);
  }

  private redeemEth(
    uxdAmount: BigNumber,
    targetPriceX96: BigNumber,
    signer: Signer
  ): Promise<ContractTransaction> {
    return this.controllerContract
      .connect(signer)
      .redeemEth(this.market, uxdAmount, targetPriceX96);
  }

  public approveUXD({
    spender,
    amount,
    signer,
  }: {
    spender: string;
    amount: number;
    signer: Signer;
  }): Promise<ContractTransaction> {
    const uxdAmount = ethers.utils.parseEther(amount.toString());
    return this.uxdContract.connect(signer).approve(spender, uxdAmount);
  }

  public approveToken({
    contractAddress,
    spender,
    amount,
    signer,
  }: {
    contractAddress: string;
    spender: string;
    amount: number;
    signer: Signer;
  }): Promise<ContractTransaction> {
    const ethAmount = ethers.utils.parseEther(amount.toString());
    return ERC20__factory.connect(contractAddress, signer)
      .connect(signer)
      .approve(spender, ethAmount);
  }

  public async allowance({
    contractAddress,
    account,
    spender,
  }: {
    contractAddress: string;
    account: string;
    spender: string;
  }): Promise<number> {
    const allowance = await ERC20__factory.connect(
      contractAddress,
      this.provider
    ).allowance(account, spender);
    return Number(ethers.utils.formatEther(allowance));
  }

  public async tokenBalance({
    contractAddress,
    account,
  }: {
    contractAddress: string;
    account: string;
  }): Promise<number> {
    const balance = await ERC20__factory.connect(
      contractAddress,
      this.provider
    ).balanceOf(account);
    return Number(ethers.utils.formatEther(balance));
  }

  public async getRedeemableMintCirculatingSupply(): Promise<number> {
    const totalSupply = await this.uxdContract.totalSupply();
    return Number(ethers.utils.formatEther(totalSupply));
  }

  public async mintedPerCollateral(token: string): Promise<number> {
    const minted = await this.controllerContract.mintedPerCollateral(token);
    return Number(ethers.utils.formatEther(minted));
  }

  public async getDepositedCollateralAmount(token: string): Promise<number> {
    const redeemable = await this.controllerContract.redeemable(token);
    return Number(ethers.utils.formatEther(redeemable));
  }

  // ===== utils

  // Transform values in an array into an object with named attributes
  // Use the position of the key and the value to match
  protected arrayToObject<T>(keys: (keyof T)[], values: unknown[]): T {
    return keys.reduce(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (obj, value, index) => (obj[value] = values[index] as any),
      {} as T
    );
  }

  // Utility function that converts an event object received from the contract to a subject
  protected registerEventListener<
    T =
      | MintedEventObject
      | RedeemedEventObject
      | ApprovalEventObject
      | TransferEventObject
  >(
    contract: Contract,
    eventName: string,
    subject: Subject<T>,
    keys: (keyof T)[]
  ): void {
    contract.on(eventName, (args) => {
      subject.next(this.arrayToObject(keys, args));
    });
  }

  protected registerEventListeners() {
    this.registerEventListener<MintedEventObject>(
      this.controllerContract,
      "Minted",
      this.mintSubject,
      ["account", "base", "quote"]
    );
    this.registerEventListener<RedeemedEventObject>(
      this.controllerContract,
      "Redeemed",
      this.redeemSubject,
      ["account", "base", "quote"]
    );
    this.registerEventListener<ApprovalEventObject>(
      this.uxdContract,
      "Approval",
      this.uxdApprovalSubject,
      ["owner", "spender", "value"]
    );
    this.registerEventListener<TransferEventObject>(
      this.uxdContract,
      "Transfer",
      this.uxdTransferSubject,
      ["from", "to", "value"]
    );
  }
}
