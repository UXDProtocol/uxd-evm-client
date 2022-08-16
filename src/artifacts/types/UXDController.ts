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
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export declare namespace UXDController {
  export type CollateralInfoStruct = {
    token: PromiseOrValue<string>;
    redeemable: PromiseOrValue<BigNumberish>;
    minted: PromiseOrValue<BigNumberish>;
  };

  export type CollateralInfoStructOutput = [string, BigNumber, BigNumber] & {
    token: string;
    redeemable: BigNumber;
    minted: BigNumber;
  };
}

export interface UXDControllerInterface extends utils.Interface {
  functions: {
    "collateralDeposited(address)": FunctionFragment;
    "collateralList(uint256)": FunctionFragment;
    "collateralTokens(address)": FunctionFragment;
    "depositInsurance(address,address,uint256)": FunctionFragment;
    "getCollateralInfo()": FunctionFragment;
    "governor()": FunctionFragment;
    "insuranceToken()": FunctionFragment;
    "mint(address,address,uint256,uint160)": FunctionFragment;
    "mintWithEth(address,uint160)": FunctionFragment;
    "mintedPerCollateral(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "redeem(address,address,uint256,uint160)": FunctionFragment;
    "redeemEth(address,uint256,uint160)": FunctionFragment;
    "redeemable(address)": FunctionFragment;
    "registry()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "router()": FunctionFragment;
    "setInsuranceToken(address)": FunctionFragment;
    "setRouter(address)": FunctionFragment;
    "setToken(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "uxdToken()": FunctionFragment;
    "weth9()": FunctionFragment;
    "whitelistCollateral(address,bool,bool)": FunctionFragment;
    "withdrawInsuranceTo(address,address,uint256,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "collateralDeposited"
      | "collateralList"
      | "collateralTokens"
      | "depositInsurance"
      | "getCollateralInfo"
      | "governor"
      | "insuranceToken"
      | "mint"
      | "mintWithEth"
      | "mintedPerCollateral"
      | "owner"
      | "redeem"
      | "redeemEth"
      | "redeemable"
      | "registry"
      | "renounceOwnership"
      | "router"
      | "setInsuranceToken"
      | "setRouter"
      | "setToken"
      | "transferOwnership"
      | "uxdToken"
      | "weth9"
      | "whitelistCollateral"
      | "withdrawInsuranceTo"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "collateralDeposited",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "collateralList",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "collateralTokens",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "depositInsurance",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getCollateralInfo",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "governor", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "insuranceToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "mintWithEth",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "mintedPerCollateral",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "redeem",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "redeemEth",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "redeemable",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "registry", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "router", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setInsuranceToken",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setRouter",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setToken",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "uxdToken", values?: undefined): string;
  encodeFunctionData(functionFragment: "weth9", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "whitelistCollateral",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<boolean>,
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawInsuranceTo",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "collateralDeposited",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "collateralList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "collateralTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "depositInsurance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCollateralInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "governor", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "insuranceToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "mintWithEth",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mintedPerCollateral",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "redeemEth", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "redeemable", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "registry", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "router", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setInsuranceToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setRouter", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "uxdToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "weth9", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "whitelistCollateral",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawInsuranceTo",
    data: BytesLike
  ): Result;

  events: {
    "Minted(address,uint256,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Redeemed(address,uint256,uint256)": EventFragment;
    "RouterUpdated(address,address)": EventFragment;
    "WhitelistUpdated(address,address,bool,bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Minted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Redeemed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RouterUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WhitelistUpdated"): EventFragment;
}

export interface MintedEventObject {
  account: string;
  base: BigNumber;
  quote: BigNumber;
}
export type MintedEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  MintedEventObject
>;

export type MintedEventFilter = TypedEventFilter<MintedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface RedeemedEventObject {
  account: string;
  base: BigNumber;
  quote: BigNumber;
}
export type RedeemedEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  RedeemedEventObject
>;

export type RedeemedEventFilter = TypedEventFilter<RedeemedEvent>;

export interface RouterUpdatedEventObject {
  by: string;
  newRouter: string;
}
export type RouterUpdatedEvent = TypedEvent<
  [string, string],
  RouterUpdatedEventObject
>;

export type RouterUpdatedEventFilter = TypedEventFilter<RouterUpdatedEvent>;

export interface WhitelistUpdatedEventObject {
  by: string;
  token: string;
  isWhitelisted: boolean;
  isBaseToken: boolean;
}
export type WhitelistUpdatedEvent = TypedEvent<
  [string, string, boolean, boolean],
  WhitelistUpdatedEventObject
>;

export type WhitelistUpdatedEventFilter =
  TypedEventFilter<WhitelistUpdatedEvent>;

export interface UXDController extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: UXDControllerInterface;

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
    collateralDeposited(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    collateralList(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    collateralTokens(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    depositInsurance(
      market: PromiseOrValue<string>,
      collateralToken: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getCollateralInfo(
      overrides?: CallOverrides
    ): Promise<
      [UXDController.CollateralInfoStructOutput[]] & {
        info: UXDController.CollateralInfoStructOutput[];
      }
    >;

    governor(overrides?: CallOverrides): Promise<[string]>;

    insuranceToken(overrides?: CallOverrides): Promise<[string]>;

    mint(
      market: PromiseOrValue<string>,
      collateralToken: PromiseOrValue<string>,
      collateralAmount: PromiseOrValue<BigNumberish>,
      sqrtPriceLimitX96: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    mintWithEth(
      market: PromiseOrValue<string>,
      sqrtPriceLimitX96: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    mintedPerCollateral(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    redeem(
      market: PromiseOrValue<string>,
      collateralToken: PromiseOrValue<string>,
      redemptionAmount: PromiseOrValue<BigNumberish>,
      sqrtPriceLimitX96: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    redeemEth(
      market: PromiseOrValue<string>,
      redemptionAmount: PromiseOrValue<BigNumberish>,
      sqrtPriceLimitX96: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    redeemable(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    registry(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    router(overrides?: CallOverrides): Promise<[string]>;

    setInsuranceToken(
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setRouter(
      _router: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setToken(
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    uxdToken(overrides?: CallOverrides): Promise<[string]>;

    weth9(overrides?: CallOverrides): Promise<[string]>;

    whitelistCollateral(
      tokenAddress: PromiseOrValue<string>,
      isWhitelisted: PromiseOrValue<boolean>,
      isBaseToken: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdrawInsuranceTo(
      market: PromiseOrValue<string>,
      collateralToken: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  collateralDeposited(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  collateralList(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  collateralTokens(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  depositInsurance(
    market: PromiseOrValue<string>,
    collateralToken: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getCollateralInfo(
    overrides?: CallOverrides
  ): Promise<UXDController.CollateralInfoStructOutput[]>;

  governor(overrides?: CallOverrides): Promise<string>;

  insuranceToken(overrides?: CallOverrides): Promise<string>;

  mint(
    market: PromiseOrValue<string>,
    collateralToken: PromiseOrValue<string>,
    collateralAmount: PromiseOrValue<BigNumberish>,
    sqrtPriceLimitX96: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  mintWithEth(
    market: PromiseOrValue<string>,
    sqrtPriceLimitX96: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  mintedPerCollateral(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  redeem(
    market: PromiseOrValue<string>,
    collateralToken: PromiseOrValue<string>,
    redemptionAmount: PromiseOrValue<BigNumberish>,
    sqrtPriceLimitX96: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  redeemEth(
    market: PromiseOrValue<string>,
    redemptionAmount: PromiseOrValue<BigNumberish>,
    sqrtPriceLimitX96: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  redeemable(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  registry(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  router(overrides?: CallOverrides): Promise<string>;

  setInsuranceToken(
    _token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setRouter(
    _router: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setToken(
    _token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  uxdToken(overrides?: CallOverrides): Promise<string>;

  weth9(overrides?: CallOverrides): Promise<string>;

  whitelistCollateral(
    tokenAddress: PromiseOrValue<string>,
    isWhitelisted: PromiseOrValue<boolean>,
    isBaseToken: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdrawInsuranceTo(
    market: PromiseOrValue<string>,
    collateralToken: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    to: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    collateralDeposited(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    collateralList(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    collateralTokens(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    depositInsurance(
      market: PromiseOrValue<string>,
      collateralToken: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    getCollateralInfo(
      overrides?: CallOverrides
    ): Promise<UXDController.CollateralInfoStructOutput[]>;

    governor(overrides?: CallOverrides): Promise<string>;

    insuranceToken(overrides?: CallOverrides): Promise<string>;

    mint(
      market: PromiseOrValue<string>,
      collateralToken: PromiseOrValue<string>,
      collateralAmount: PromiseOrValue<BigNumberish>,
      sqrtPriceLimitX96: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    mintWithEth(
      market: PromiseOrValue<string>,
      sqrtPriceLimitX96: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    mintedPerCollateral(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    redeem(
      market: PromiseOrValue<string>,
      collateralToken: PromiseOrValue<string>,
      redemptionAmount: PromiseOrValue<BigNumberish>,
      sqrtPriceLimitX96: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    redeemEth(
      market: PromiseOrValue<string>,
      redemptionAmount: PromiseOrValue<BigNumberish>,
      sqrtPriceLimitX96: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    redeemable(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    registry(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    router(overrides?: CallOverrides): Promise<string>;

    setInsuranceToken(
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setRouter(
      _router: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setToken(
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    uxdToken(overrides?: CallOverrides): Promise<string>;

    weth9(overrides?: CallOverrides): Promise<string>;

    whitelistCollateral(
      tokenAddress: PromiseOrValue<string>,
      isWhitelisted: PromiseOrValue<boolean>,
      isBaseToken: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawInsuranceTo(
      market: PromiseOrValue<string>,
      collateralToken: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Minted(address,uint256,uint256)"(
      account?: PromiseOrValue<string> | null,
      base?: null,
      quote?: null
    ): MintedEventFilter;
    Minted(
      account?: PromiseOrValue<string> | null,
      base?: null,
      quote?: null
    ): MintedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "Redeemed(address,uint256,uint256)"(
      account?: PromiseOrValue<string> | null,
      base?: null,
      quote?: null
    ): RedeemedEventFilter;
    Redeemed(
      account?: PromiseOrValue<string> | null,
      base?: null,
      quote?: null
    ): RedeemedEventFilter;

    "RouterUpdated(address,address)"(
      by?: PromiseOrValue<string> | null,
      newRouter?: PromiseOrValue<string> | null
    ): RouterUpdatedEventFilter;
    RouterUpdated(
      by?: PromiseOrValue<string> | null,
      newRouter?: PromiseOrValue<string> | null
    ): RouterUpdatedEventFilter;

    "WhitelistUpdated(address,address,bool,bool)"(
      by?: PromiseOrValue<string> | null,
      token?: PromiseOrValue<string> | null,
      isWhitelisted?: null,
      isBaseToken?: null
    ): WhitelistUpdatedEventFilter;
    WhitelistUpdated(
      by?: PromiseOrValue<string> | null,
      token?: PromiseOrValue<string> | null,
      isWhitelisted?: null,
      isBaseToken?: null
    ): WhitelistUpdatedEventFilter;
  };

  estimateGas: {
    collateralDeposited(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    collateralList(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    collateralTokens(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    depositInsurance(
      market: PromiseOrValue<string>,
      collateralToken: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getCollateralInfo(overrides?: CallOverrides): Promise<BigNumber>;

    governor(overrides?: CallOverrides): Promise<BigNumber>;

    insuranceToken(overrides?: CallOverrides): Promise<BigNumber>;

    mint(
      market: PromiseOrValue<string>,
      collateralToken: PromiseOrValue<string>,
      collateralAmount: PromiseOrValue<BigNumberish>,
      sqrtPriceLimitX96: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    mintWithEth(
      market: PromiseOrValue<string>,
      sqrtPriceLimitX96: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    mintedPerCollateral(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    redeem(
      market: PromiseOrValue<string>,
      collateralToken: PromiseOrValue<string>,
      redemptionAmount: PromiseOrValue<BigNumberish>,
      sqrtPriceLimitX96: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    redeemEth(
      market: PromiseOrValue<string>,
      redemptionAmount: PromiseOrValue<BigNumberish>,
      sqrtPriceLimitX96: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    redeemable(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    registry(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    router(overrides?: CallOverrides): Promise<BigNumber>;

    setInsuranceToken(
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setRouter(
      _router: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setToken(
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    uxdToken(overrides?: CallOverrides): Promise<BigNumber>;

    weth9(overrides?: CallOverrides): Promise<BigNumber>;

    whitelistCollateral(
      tokenAddress: PromiseOrValue<string>,
      isWhitelisted: PromiseOrValue<boolean>,
      isBaseToken: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdrawInsuranceTo(
      market: PromiseOrValue<string>,
      collateralToken: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    collateralDeposited(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    collateralList(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    collateralTokens(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    depositInsurance(
      market: PromiseOrValue<string>,
      collateralToken: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getCollateralInfo(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    governor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    insuranceToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mint(
      market: PromiseOrValue<string>,
      collateralToken: PromiseOrValue<string>,
      collateralAmount: PromiseOrValue<BigNumberish>,
      sqrtPriceLimitX96: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    mintWithEth(
      market: PromiseOrValue<string>,
      sqrtPriceLimitX96: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    mintedPerCollateral(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    redeem(
      market: PromiseOrValue<string>,
      collateralToken: PromiseOrValue<string>,
      redemptionAmount: PromiseOrValue<BigNumberish>,
      sqrtPriceLimitX96: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    redeemEth(
      market: PromiseOrValue<string>,
      redemptionAmount: PromiseOrValue<BigNumberish>,
      sqrtPriceLimitX96: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    redeemable(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    registry(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    router(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setInsuranceToken(
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setRouter(
      _router: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setToken(
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    uxdToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    weth9(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    whitelistCollateral(
      tokenAddress: PromiseOrValue<string>,
      isWhitelisted: PromiseOrValue<boolean>,
      isBaseToken: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdrawInsuranceTo(
      market: PromiseOrValue<string>,
      collateralToken: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
