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
} from "../../../common";

export type GrowthStruct = {
  twPremiumX96: PromiseOrValue<BigNumberish>;
  twPremiumDivBySqrtPriceX96: PromiseOrValue<BigNumberish>;
};

export type GrowthStructOutput = [BigNumber, BigNumber] & {
  twPremiumX96: BigNumber;
  twPremiumDivBySqrtPriceX96: BigNumber;
};

export declare namespace IExchange {
  export type RealizePnlParamsStruct = {
    trader: PromiseOrValue<string>;
    baseToken: PromiseOrValue<string>;
    base: PromiseOrValue<BigNumberish>;
    quote: PromiseOrValue<BigNumberish>;
  };

  export type RealizePnlParamsStructOutput = [
    string,
    string,
    BigNumber,
    BigNumber
  ] & { trader: string; baseToken: string; base: BigNumber; quote: BigNumber };

  export type SwapParamsStruct = {
    trader: PromiseOrValue<string>;
    baseToken: PromiseOrValue<string>;
    isBaseToQuote: PromiseOrValue<boolean>;
    isExactInput: PromiseOrValue<boolean>;
    isClose: PromiseOrValue<boolean>;
    amount: PromiseOrValue<BigNumberish>;
    sqrtPriceLimitX96: PromiseOrValue<BigNumberish>;
  };

  export type SwapParamsStructOutput = [
    string,
    string,
    boolean,
    boolean,
    boolean,
    BigNumber,
    BigNumber
  ] & {
    trader: string;
    baseToken: string;
    isBaseToQuote: boolean;
    isExactInput: boolean;
    isClose: boolean;
    amount: BigNumber;
    sqrtPriceLimitX96: BigNumber;
  };

  export type SwapResponseStruct = {
    base: PromiseOrValue<BigNumberish>;
    quote: PromiseOrValue<BigNumberish>;
    exchangedPositionSize: PromiseOrValue<BigNumberish>;
    exchangedPositionNotional: PromiseOrValue<BigNumberish>;
    fee: PromiseOrValue<BigNumberish>;
    insuranceFundFee: PromiseOrValue<BigNumberish>;
    pnlToBeRealized: PromiseOrValue<BigNumberish>;
    sqrtPriceAfterX96: PromiseOrValue<BigNumberish>;
    tick: PromiseOrValue<BigNumberish>;
    isPartialClose: PromiseOrValue<boolean>;
  };

  export type SwapResponseStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    number,
    boolean
  ] & {
    base: BigNumber;
    quote: BigNumber;
    exchangedPositionSize: BigNumber;
    exchangedPositionNotional: BigNumber;
    fee: BigNumber;
    insuranceFundFee: BigNumber;
    pnlToBeRealized: BigNumber;
    sqrtPriceAfterX96: BigNumber;
    tick: number;
    isPartialClose: boolean;
  };
}

export interface IExchangeInterface extends utils.Interface {
  functions: {
    "getAccountBalance()": FunctionFragment;
    "getAllPendingFundingPayment(address)": FunctionFragment;
    "getClearingHouseConfig()": FunctionFragment;
    "getMaxTickCrossedWithinBlock(address)": FunctionFragment;
    "getOrderBook()": FunctionFragment;
    "getPendingFundingPayment(address,address)": FunctionFragment;
    "getPnlToBeRealized((address,address,int256,int256))": FunctionFragment;
    "getSqrtMarkTwapX96(address,uint32)": FunctionFragment;
    "isOverPriceSpread(address)": FunctionFragment;
    "settleFunding(address,address)": FunctionFragment;
    "swap((address,address,bool,bool,bool,uint256,uint160))": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getAccountBalance"
      | "getAllPendingFundingPayment"
      | "getClearingHouseConfig"
      | "getMaxTickCrossedWithinBlock"
      | "getOrderBook"
      | "getPendingFundingPayment"
      | "getPnlToBeRealized"
      | "getSqrtMarkTwapX96"
      | "isOverPriceSpread"
      | "settleFunding"
      | "swap"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getAccountBalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAllPendingFundingPayment",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getClearingHouseConfig",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getMaxTickCrossedWithinBlock",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getOrderBook",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPendingFundingPayment",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getPnlToBeRealized",
    values: [IExchange.RealizePnlParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "getSqrtMarkTwapX96",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "isOverPriceSpread",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "settleFunding",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "swap",
    values: [IExchange.SwapParamsStruct]
  ): string;

  decodeFunctionResult(
    functionFragment: "getAccountBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllPendingFundingPayment",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getClearingHouseConfig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMaxTickCrossedWithinBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOrderBook",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPendingFundingPayment",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPnlToBeRealized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSqrtMarkTwapX96",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isOverPriceSpread",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "settleFunding",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;

  events: {
    "AccountBalanceChanged(address)": EventFragment;
    "FundingUpdated(address,uint256,uint256)": EventFragment;
    "MaxTickCrossedWithinBlockChanged(address,uint24)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AccountBalanceChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FundingUpdated"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "MaxTickCrossedWithinBlockChanged"
  ): EventFragment;
}

export interface AccountBalanceChangedEventObject {
  accountBalance: string;
}
export type AccountBalanceChangedEvent = TypedEvent<
  [string],
  AccountBalanceChangedEventObject
>;

export type AccountBalanceChangedEventFilter =
  TypedEventFilter<AccountBalanceChangedEvent>;

export interface FundingUpdatedEventObject {
  baseToken: string;
  markTwap: BigNumber;
  indexTwap: BigNumber;
}
export type FundingUpdatedEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  FundingUpdatedEventObject
>;

export type FundingUpdatedEventFilter = TypedEventFilter<FundingUpdatedEvent>;

export interface MaxTickCrossedWithinBlockChangedEventObject {
  baseToken: string;
  maxTickCrossedWithinBlock: number;
}
export type MaxTickCrossedWithinBlockChangedEvent = TypedEvent<
  [string, number],
  MaxTickCrossedWithinBlockChangedEventObject
>;

export type MaxTickCrossedWithinBlockChangedEventFilter =
  TypedEventFilter<MaxTickCrossedWithinBlockChangedEvent>;

export interface IExchange extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IExchangeInterface;

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
    getAccountBalance(
      overrides?: CallOverrides
    ): Promise<[string] & { accountBalance: string }>;

    getAllPendingFundingPayment(
      trader: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { pendingFundingPayment: BigNumber }>;

    getClearingHouseConfig(
      overrides?: CallOverrides
    ): Promise<[string] & { clearingHouse: string }>;

    getMaxTickCrossedWithinBlock(
      baseToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[number] & { maxTickCrossedWithinBlock: number }>;

    getOrderBook(
      overrides?: CallOverrides
    ): Promise<[string] & { orderBook: string }>;

    getPendingFundingPayment(
      trader: PromiseOrValue<string>,
      baseToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { pendingFundingPayment: BigNumber }>;

    getPnlToBeRealized(
      params: IExchange.RealizePnlParamsStruct,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { pnlToBeRealized: BigNumber }>;

    getSqrtMarkTwapX96(
      baseToken: PromiseOrValue<string>,
      twapInterval: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { sqrtMarkTwapX96: BigNumber }>;

    isOverPriceSpread(
      baseToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    settleFunding(
      trader: PromiseOrValue<string>,
      baseToken: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    swap(
      params: IExchange.SwapParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  getAccountBalance(overrides?: CallOverrides): Promise<string>;

  getAllPendingFundingPayment(
    trader: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getClearingHouseConfig(overrides?: CallOverrides): Promise<string>;

  getMaxTickCrossedWithinBlock(
    baseToken: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<number>;

  getOrderBook(overrides?: CallOverrides): Promise<string>;

  getPendingFundingPayment(
    trader: PromiseOrValue<string>,
    baseToken: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getPnlToBeRealized(
    params: IExchange.RealizePnlParamsStruct,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getSqrtMarkTwapX96(
    baseToken: PromiseOrValue<string>,
    twapInterval: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  isOverPriceSpread(
    baseToken: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  settleFunding(
    trader: PromiseOrValue<string>,
    baseToken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  swap(
    params: IExchange.SwapParamsStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getAccountBalance(overrides?: CallOverrides): Promise<string>;

    getAllPendingFundingPayment(
      trader: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getClearingHouseConfig(overrides?: CallOverrides): Promise<string>;

    getMaxTickCrossedWithinBlock(
      baseToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<number>;

    getOrderBook(overrides?: CallOverrides): Promise<string>;

    getPendingFundingPayment(
      trader: PromiseOrValue<string>,
      baseToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPnlToBeRealized(
      params: IExchange.RealizePnlParamsStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSqrtMarkTwapX96(
      baseToken: PromiseOrValue<string>,
      twapInterval: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isOverPriceSpread(
      baseToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    settleFunding(
      trader: PromiseOrValue<string>,
      baseToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, GrowthStructOutput] & {
        fundingPayment: BigNumber;
        fundingGrowthGlobal: GrowthStructOutput;
      }
    >;

    swap(
      params: IExchange.SwapParamsStruct,
      overrides?: CallOverrides
    ): Promise<IExchange.SwapResponseStructOutput>;
  };

  filters: {
    "AccountBalanceChanged(address)"(
      accountBalance?: null
    ): AccountBalanceChangedEventFilter;
    AccountBalanceChanged(
      accountBalance?: null
    ): AccountBalanceChangedEventFilter;

    "FundingUpdated(address,uint256,uint256)"(
      baseToken?: PromiseOrValue<string> | null,
      markTwap?: null,
      indexTwap?: null
    ): FundingUpdatedEventFilter;
    FundingUpdated(
      baseToken?: PromiseOrValue<string> | null,
      markTwap?: null,
      indexTwap?: null
    ): FundingUpdatedEventFilter;

    "MaxTickCrossedWithinBlockChanged(address,uint24)"(
      baseToken?: PromiseOrValue<string> | null,
      maxTickCrossedWithinBlock?: null
    ): MaxTickCrossedWithinBlockChangedEventFilter;
    MaxTickCrossedWithinBlockChanged(
      baseToken?: PromiseOrValue<string> | null,
      maxTickCrossedWithinBlock?: null
    ): MaxTickCrossedWithinBlockChangedEventFilter;
  };

  estimateGas: {
    getAccountBalance(overrides?: CallOverrides): Promise<BigNumber>;

    getAllPendingFundingPayment(
      trader: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getClearingHouseConfig(overrides?: CallOverrides): Promise<BigNumber>;

    getMaxTickCrossedWithinBlock(
      baseToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOrderBook(overrides?: CallOverrides): Promise<BigNumber>;

    getPendingFundingPayment(
      trader: PromiseOrValue<string>,
      baseToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPnlToBeRealized(
      params: IExchange.RealizePnlParamsStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSqrtMarkTwapX96(
      baseToken: PromiseOrValue<string>,
      twapInterval: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isOverPriceSpread(
      baseToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    settleFunding(
      trader: PromiseOrValue<string>,
      baseToken: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    swap(
      params: IExchange.SwapParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getAccountBalance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAllPendingFundingPayment(
      trader: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getClearingHouseConfig(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMaxTickCrossedWithinBlock(
      baseToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOrderBook(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPendingFundingPayment(
      trader: PromiseOrValue<string>,
      baseToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPnlToBeRealized(
      params: IExchange.RealizePnlParamsStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSqrtMarkTwapX96(
      baseToken: PromiseOrValue<string>,
      twapInterval: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isOverPriceSpread(
      baseToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    settleFunding(
      trader: PromiseOrValue<string>,
      baseToken: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    swap(
      params: IExchange.SwapParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
