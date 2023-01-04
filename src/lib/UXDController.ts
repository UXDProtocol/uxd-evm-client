import {
  BigNumber,
  ContractTransaction,
  ethers,
  Signer,
  providers,
  utils,
} from "ethers";
import {
  UXDToken__factory,
  UXDController__factory,
  UXDToken as UXDTokenContract,
  UXDController as UXDControllerContract,
  ERC20__factory,
} from "../typechain-types";
import { Address } from "./types";

export interface CollateralInfo {
  symbol?: string;
  token: string;
  redeemable: BigNumber;
  minted: BigNumber;
}

export class UXDController {
  public readonly provider: providers.JsonRpcProvider;

  public readonly contract: UXDControllerContract
  public readonly uxdTokenContract: UXDTokenContract

  constructor({
    provider,
    controller,
    redeemable,
  }: {
    provider: ethers.providers.JsonRpcProvider;
    controller: Address;
    redeemable: Address;
  }) {
    this.provider = provider;

    this.contract = UXDController__factory.connect(
      controller,
      this.provider,
    );

    this.uxdTokenContract = UXDToken__factory.connect(
      redeemable,
      this.provider,
    );
  }

  public async mint({
    amount,
    minAmountOut,
    signer,
    collateral,
    receiver,
  }: {
    amount: number;
    minAmountOut: number;
    signer: Signer;
    collateral?: Address;
    receiver?: Address;
  }): Promise<ContractTransaction> {
    const nativeAmount = utils.parseEther(amount.toString());
    const minNativeAmountOut = utils.parseEther(minAmountOut.toString());

    if (collateral) {
      return this.mintWithERC20({
        nativeAmount,
        minNativeAmountOut,
        signer,
        collateral,
        receiver,
      });
    }

    return this.mintWithETH({
      nativeAmount,
      minNativeAmountOut,
      signer,
      receiver,
    });
  }

  // Mint with any ERC20 compatible token
  protected async mintWithERC20({
    nativeAmount,
    minNativeAmountOut,
    signer,
    collateral,
    receiver,
  }: {
    nativeAmount: BigNumber;
    minNativeAmountOut: BigNumber;
    signer: Signer;
    collateral: Address;
    receiver?: Address;
  }): Promise<ContractTransaction> {
    return this.contract
      .connect(signer)
      .mint(
        collateral,
        nativeAmount,
        minNativeAmountOut,
        receiver ?? await signer.getAddress(),
        {
          // ??? Which is the correct gas limit to put? Ask john
          gasLimit: ethers.utils.parseEther('0.000000000009'),
        }
      );
  }

  protected async mintWithETH({
    nativeAmount,
    minNativeAmountOut,
    signer,
    receiver,
  }: {
    nativeAmount: BigNumber;
    minNativeAmountOut: BigNumber;
    signer: Signer;
    receiver?: Address;
  }): Promise<ContractTransaction> {
    return this.contract
      .connect(signer)
      .mintWithEth(
        minNativeAmountOut,
        receiver ?? await signer.getAddress(),
        {
          value: nativeAmount,
          // ??? Which is the correct gas limit to put? Ask john
          gasLimit: ethers.utils.parseEther('0.000000000009'),
        },
      );
  }

  public redeem({
    amount,
    minAmountOut,
    signer,
    collateral,
    receiver,
  }: {
    amount: number;
    minAmountOut: number;
    signer: Signer;
    collateral?: Address;
    receiver?: Address;
  }): Promise<ContractTransaction> {
    const nativeAmount = utils.parseEther(amount.toString());
    const minNativeAmountOut = utils.parseEther(minAmountOut.toString());

    if (collateral) {
      return this.redeemForERC20({
        nativeAmount,
        minNativeAmountOut,
        signer,
        collateral,
        receiver,
      });
    }

    return this.redeemForETH({
      nativeAmount,
      minNativeAmountOut,
      signer,
      receiver,
    });
  }

  // Redeem with any ERC20 compatible token
  protected async redeemForERC20({
    nativeAmount,
    minNativeAmountOut,
    signer,
    collateral,
    receiver,
  }: {
    nativeAmount: BigNumber;
    minNativeAmountOut: BigNumber;
    signer: Signer;
    collateral: Address;
    receiver?: Address;
  }): Promise<ContractTransaction> {
    return this.contract
      .connect(signer)
      .redeem(
        collateral,
        nativeAmount,
        minNativeAmountOut,
        receiver ?? await signer.getAddress(),
        {
          // ??? Which is the correct gas limit to put? Ask john
          gasLimit: ethers.utils.parseEther('0.000000000009'),
        },
      );
  }

  protected async redeemForETH({
    nativeAmount,
    minNativeAmountOut,
    signer,
    receiver,
  }: {
    nativeAmount: BigNumber;
    minNativeAmountOut: BigNumber;
    signer: Signer;
    receiver?: Address;
  }): Promise<ContractTransaction> {
    return this.contract
      .connect(signer)
      .redeemForEth(
        nativeAmount,
        minNativeAmountOut,
        receiver ?? await signer.getAddress(),
        {
          // ??? Which is the correct gas limit to put? Ask john
          gasLimit: ethers.utils.parseEther('0.000000000009'),
        },
      );
  }

  // Gives the right to the spender to use given amount of UXD
  public approveUXDTransfer({
    spender,
    amount,
    signer,
  }: {
    spender: Address;
    amount: number;
    signer: Signer;
  }): Promise<ContractTransaction> {
    const uxdAmount = utils.parseEther(amount.toString());

    return this.uxdTokenContract.connect(signer).approve(spender, uxdAmount);
  }

  // Gives the right to the spender to use given amount of token
  public approveERC20TokenTransfer({
    token,
    spender,
    amount,
    signer,
  }: {
    token: Address;
    spender: Address;
    amount: number;
    signer: Signer;
  }): Promise<ContractTransaction> {
    const nativeAmount = utils.parseEther(amount.toString());

    return ERC20__factory.connect(token, signer)
      .connect(signer)
      .approve(spender, nativeAmount);
  }

  // Returns how much token the spender have the right to spent for the given account
  public async getERC20TokenAllowance({
    token,
    account,
    spender,
  }: {
    token: Address;
    account: Address;
    spender: Address;
  }): Promise<number> {
    const allowance = await ERC20__factory.connect(
      token,
      this.provider
    ).allowance(account, spender);

    return parseInt(ethers.utils.formatEther(allowance));
  }

  public async getTokenBalance({
    token,
    account,
  }: {
    token: Address;
    account: Address;
  }): Promise<number> {
    const balance = await ERC20__factory.connect(
      token,
      this.provider
    ).balanceOf(account);

    return parseInt(ethers.utils.formatEther(balance));
  }
}
