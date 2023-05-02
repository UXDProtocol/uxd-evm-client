/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface IUXDRouterInterface extends utils.Interface {
  functions: {
    "findDepositoryForAssetDeposit(address,uint256)": FunctionFragment;
    "findDepositoryForRedeem(address,uint256)": FunctionFragment;
    "registerDepository(address,address)": FunctionFragment;
    "unregisterDepository(address,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "findDepositoryForAssetDeposit"
      | "findDepositoryForRedeem"
      | "registerDepository"
      | "unregisterDepository"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "findDepositoryForAssetDeposit",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "findDepositoryForRedeem",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "registerDepository",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "unregisterDepository",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "findDepositoryForAssetDeposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "findDepositoryForRedeem",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerDepository",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unregisterDepository",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IUXDRouter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IUXDRouterInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    findDepositoryForAssetDeposit(
      asset: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    findDepositoryForRedeem(
      asset: PromiseOrValue<string>,
      redeemAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    registerDepository(
      depository: PromiseOrValue<string>,
      asset: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    unregisterDepository(
      depository: PromiseOrValue<string>,
      asset: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  findDepositoryForAssetDeposit(
    asset: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  findDepositoryForRedeem(
    asset: PromiseOrValue<string>,
    redeemAmount: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  registerDepository(
    depository: PromiseOrValue<string>,
    asset: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  unregisterDepository(
    depository: PromiseOrValue<string>,
    asset: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    findDepositoryForAssetDeposit(
      asset: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    findDepositoryForRedeem(
      asset: PromiseOrValue<string>,
      redeemAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    registerDepository(
      depository: PromiseOrValue<string>,
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    unregisterDepository(
      depository: PromiseOrValue<string>,
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    findDepositoryForAssetDeposit(
      asset: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    findDepositoryForRedeem(
      asset: PromiseOrValue<string>,
      redeemAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    registerDepository(
      depository: PromiseOrValue<string>,
      asset: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    unregisterDepository(
      depository: PromiseOrValue<string>,
      asset: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    findDepositoryForAssetDeposit(
      asset: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    findDepositoryForRedeem(
      asset: PromiseOrValue<string>,
      redeemAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    registerDepository(
      depository: PromiseOrValue<string>,
      asset: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    unregisterDepository(
      depository: PromiseOrValue<string>,
      asset: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
