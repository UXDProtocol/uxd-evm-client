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

export interface RageDnDepositoryInterface extends utils.Interface {
  functions: {
    "assetToken()": FunctionFragment;
    "controller()": FunctionFragment;
    "deposit(address,uint256)": FunctionFragment;
    "depositInsurance(uint256,address)": FunctionFragment;
    "getDepositoryAssets()": FunctionFragment;
    "getDepositoryShares()": FunctionFragment;
    "getUnrealizedPnl()": FunctionFragment;
    "insuranceDeposits()": FunctionFragment;
    "insuranceToken()": FunctionFragment;
    "netAssetDeposits()": FunctionFragment;
    "owner()": FunctionFragment;
    "realizedPnl()": FunctionFragment;
    "redeem(address,uint256)": FunctionFragment;
    "redeemable()": FunctionFragment;
    "redeemableSoftCap()": FunctionFragment;
    "redeemableUnderManagement()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setRedeemableSoftCap(uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "vault()": FunctionFragment;
    "withdrawInsurance(uint256,address)": FunctionFragment;
    "withdrawProfits(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "assetToken"
      | "controller"
      | "deposit"
      | "depositInsurance"
      | "getDepositoryAssets"
      | "getDepositoryShares"
      | "getUnrealizedPnl"
      | "insuranceDeposits"
      | "insuranceToken"
      | "netAssetDeposits"
      | "owner"
      | "realizedPnl"
      | "redeem"
      | "redeemable"
      | "redeemableSoftCap"
      | "redeemableUnderManagement"
      | "renounceOwnership"
      | "setRedeemableSoftCap"
      | "transferOwnership"
      | "vault"
      | "withdrawInsurance"
      | "withdrawProfits"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "assetToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "controller",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "depositInsurance",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getDepositoryAssets",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getDepositoryShares",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getUnrealizedPnl",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "insuranceDeposits",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "insuranceToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "netAssetDeposits",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "realizedPnl",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "redeem",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "redeemable",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "redeemableSoftCap",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "redeemableUnderManagement",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setRedeemableSoftCap",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "vault", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdrawInsurance",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawProfits",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "assetToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "controller", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "depositInsurance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDepositoryAssets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDepositoryShares",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUnrealizedPnl",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "insuranceDeposits",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "insuranceToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "netAssetDeposits",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "realizedPnl",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "redeemable", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "redeemableSoftCap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "redeemableUnderManagement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRedeemableSoftCap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vault", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawInsurance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawProfits",
    data: BytesLike
  ): Result;

  events: {
    "Deposited(address,uint256,uint256,uint256)": EventFragment;
    "InsuranceDeposited(address,address,uint256)": EventFragment;
    "InsuranceWithdrawn(address,address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "RedeemableSoftCapUpdated(address,uint256)": EventFragment;
    "Redeemed(address,uint256,uint256,uint256)": EventFragment;
    "Withdrawn(address,uint256,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Deposited"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "InsuranceDeposited"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "InsuranceWithdrawn"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RedeemableSoftCapUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Redeemed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdrawn"): EventFragment;
}

export interface DepositedEventObject {
  caller: string;
  assets: BigNumber;
  redeemable: BigNumber;
  shares: BigNumber;
}
export type DepositedEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber],
  DepositedEventObject
>;

export type DepositedEventFilter = TypedEventFilter<DepositedEvent>;

export interface InsuranceDepositedEventObject {
  caller: string;
  from: string;
  amount: BigNumber;
}
export type InsuranceDepositedEvent = TypedEvent<
  [string, string, BigNumber],
  InsuranceDepositedEventObject
>;

export type InsuranceDepositedEventFilter =
  TypedEventFilter<InsuranceDepositedEvent>;

export interface InsuranceWithdrawnEventObject {
  caller: string;
  to: string;
  amount: BigNumber;
}
export type InsuranceWithdrawnEvent = TypedEvent<
  [string, string, BigNumber],
  InsuranceWithdrawnEventObject
>;

export type InsuranceWithdrawnEventFilter =
  TypedEventFilter<InsuranceWithdrawnEvent>;

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

export interface RedeemableSoftCapUpdatedEventObject {
  caller: string;
  newSoftCap: BigNumber;
}
export type RedeemableSoftCapUpdatedEvent = TypedEvent<
  [string, BigNumber],
  RedeemableSoftCapUpdatedEventObject
>;

export type RedeemableSoftCapUpdatedEventFilter =
  TypedEventFilter<RedeemableSoftCapUpdatedEvent>;

export interface RedeemedEventObject {
  caller: string;
  assets: BigNumber;
  redeemable: BigNumber;
  shares: BigNumber;
}
export type RedeemedEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber],
  RedeemedEventObject
>;

export type RedeemedEventFilter = TypedEventFilter<RedeemedEvent>;

export interface WithdrawnEventObject {
  caller: string;
  assets: BigNumber;
  redeemable: BigNumber;
  shares: BigNumber;
}
export type WithdrawnEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber],
  WithdrawnEventObject
>;

export type WithdrawnEventFilter = TypedEventFilter<WithdrawnEvent>;

export interface RageDnDepository extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RageDnDepositoryInterface;

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
    assetToken(overrides?: CallOverrides): Promise<[string]>;

    controller(overrides?: CallOverrides): Promise<[string]>;

    deposit(
      asset: PromiseOrValue<string>,
      assetAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    depositInsurance(
      amount: PromiseOrValue<BigNumberish>,
      from: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getDepositoryAssets(overrides?: CallOverrides): Promise<[BigNumber]>;

    getDepositoryShares(overrides?: CallOverrides): Promise<[BigNumber]>;

    getUnrealizedPnl(overrides?: CallOverrides): Promise<[BigNumber]>;

    insuranceDeposits(overrides?: CallOverrides): Promise<[BigNumber]>;

    insuranceToken(overrides?: CallOverrides): Promise<[string]>;

    netAssetDeposits(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    realizedPnl(overrides?: CallOverrides): Promise<[BigNumber]>;

    redeem(
      asset: PromiseOrValue<string>,
      redeemableAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    redeemable(overrides?: CallOverrides): Promise<[string]>;

    redeemableSoftCap(overrides?: CallOverrides): Promise<[BigNumber]>;

    redeemableUnderManagement(overrides?: CallOverrides): Promise<[BigNumber]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setRedeemableSoftCap(
      softCap: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    vault(overrides?: CallOverrides): Promise<[string]>;

    withdrawInsurance(
      amount: PromiseOrValue<BigNumberish>,
      receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdrawProfits(
      receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  assetToken(overrides?: CallOverrides): Promise<string>;

  controller(overrides?: CallOverrides): Promise<string>;

  deposit(
    asset: PromiseOrValue<string>,
    assetAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  depositInsurance(
    amount: PromiseOrValue<BigNumberish>,
    from: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getDepositoryAssets(overrides?: CallOverrides): Promise<BigNumber>;

  getDepositoryShares(overrides?: CallOverrides): Promise<BigNumber>;

  getUnrealizedPnl(overrides?: CallOverrides): Promise<BigNumber>;

  insuranceDeposits(overrides?: CallOverrides): Promise<BigNumber>;

  insuranceToken(overrides?: CallOverrides): Promise<string>;

  netAssetDeposits(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  realizedPnl(overrides?: CallOverrides): Promise<BigNumber>;

  redeem(
    asset: PromiseOrValue<string>,
    redeemableAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  redeemable(overrides?: CallOverrides): Promise<string>;

  redeemableSoftCap(overrides?: CallOverrides): Promise<BigNumber>;

  redeemableUnderManagement(overrides?: CallOverrides): Promise<BigNumber>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setRedeemableSoftCap(
    softCap: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  vault(overrides?: CallOverrides): Promise<string>;

  withdrawInsurance(
    amount: PromiseOrValue<BigNumberish>,
    receiver: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdrawProfits(
    receiver: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    assetToken(overrides?: CallOverrides): Promise<string>;

    controller(overrides?: CallOverrides): Promise<string>;

    deposit(
      asset: PromiseOrValue<string>,
      assetAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    depositInsurance(
      amount: PromiseOrValue<BigNumberish>,
      from: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    getDepositoryAssets(overrides?: CallOverrides): Promise<BigNumber>;

    getDepositoryShares(overrides?: CallOverrides): Promise<BigNumber>;

    getUnrealizedPnl(overrides?: CallOverrides): Promise<BigNumber>;

    insuranceDeposits(overrides?: CallOverrides): Promise<BigNumber>;

    insuranceToken(overrides?: CallOverrides): Promise<string>;

    netAssetDeposits(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    realizedPnl(overrides?: CallOverrides): Promise<BigNumber>;

    redeem(
      asset: PromiseOrValue<string>,
      redeemableAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    redeemable(overrides?: CallOverrides): Promise<string>;

    redeemableSoftCap(overrides?: CallOverrides): Promise<BigNumber>;

    redeemableUnderManagement(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setRedeemableSoftCap(
      softCap: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    vault(overrides?: CallOverrides): Promise<string>;

    withdrawInsurance(
      amount: PromiseOrValue<BigNumberish>,
      receiver: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawProfits(
      receiver: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Deposited(address,uint256,uint256,uint256)"(
      caller?: PromiseOrValue<string> | null,
      assets?: null,
      redeemable?: null,
      shares?: null
    ): DepositedEventFilter;
    Deposited(
      caller?: PromiseOrValue<string> | null,
      assets?: null,
      redeemable?: null,
      shares?: null
    ): DepositedEventFilter;

    "InsuranceDeposited(address,address,uint256)"(
      caller?: PromiseOrValue<string> | null,
      from?: PromiseOrValue<string> | null,
      amount?: null
    ): InsuranceDepositedEventFilter;
    InsuranceDeposited(
      caller?: PromiseOrValue<string> | null,
      from?: PromiseOrValue<string> | null,
      amount?: null
    ): InsuranceDepositedEventFilter;

    "InsuranceWithdrawn(address,address,uint256)"(
      caller?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      amount?: null
    ): InsuranceWithdrawnEventFilter;
    InsuranceWithdrawn(
      caller?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      amount?: null
    ): InsuranceWithdrawnEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "RedeemableSoftCapUpdated(address,uint256)"(
      caller?: PromiseOrValue<string> | null,
      newSoftCap?: null
    ): RedeemableSoftCapUpdatedEventFilter;
    RedeemableSoftCapUpdated(
      caller?: PromiseOrValue<string> | null,
      newSoftCap?: null
    ): RedeemableSoftCapUpdatedEventFilter;

    "Redeemed(address,uint256,uint256,uint256)"(
      caller?: PromiseOrValue<string> | null,
      assets?: null,
      redeemable?: null,
      shares?: null
    ): RedeemedEventFilter;
    Redeemed(
      caller?: PromiseOrValue<string> | null,
      assets?: null,
      redeemable?: null,
      shares?: null
    ): RedeemedEventFilter;

    "Withdrawn(address,uint256,uint256,uint256)"(
      caller?: PromiseOrValue<string> | null,
      assets?: null,
      redeemable?: null,
      shares?: null
    ): WithdrawnEventFilter;
    Withdrawn(
      caller?: PromiseOrValue<string> | null,
      assets?: null,
      redeemable?: null,
      shares?: null
    ): WithdrawnEventFilter;
  };

  estimateGas: {
    assetToken(overrides?: CallOverrides): Promise<BigNumber>;

    controller(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      asset: PromiseOrValue<string>,
      assetAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    depositInsurance(
      amount: PromiseOrValue<BigNumberish>,
      from: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getDepositoryAssets(overrides?: CallOverrides): Promise<BigNumber>;

    getDepositoryShares(overrides?: CallOverrides): Promise<BigNumber>;

    getUnrealizedPnl(overrides?: CallOverrides): Promise<BigNumber>;

    insuranceDeposits(overrides?: CallOverrides): Promise<BigNumber>;

    insuranceToken(overrides?: CallOverrides): Promise<BigNumber>;

    netAssetDeposits(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    realizedPnl(overrides?: CallOverrides): Promise<BigNumber>;

    redeem(
      asset: PromiseOrValue<string>,
      redeemableAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    redeemable(overrides?: CallOverrides): Promise<BigNumber>;

    redeemableSoftCap(overrides?: CallOverrides): Promise<BigNumber>;

    redeemableUnderManagement(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setRedeemableSoftCap(
      softCap: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    vault(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawInsurance(
      amount: PromiseOrValue<BigNumberish>,
      receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdrawProfits(
      receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    assetToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    controller(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deposit(
      asset: PromiseOrValue<string>,
      assetAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    depositInsurance(
      amount: PromiseOrValue<BigNumberish>,
      from: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getDepositoryAssets(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getDepositoryShares(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUnrealizedPnl(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    insuranceDeposits(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    insuranceToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    netAssetDeposits(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    realizedPnl(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    redeem(
      asset: PromiseOrValue<string>,
      redeemableAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    redeemable(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    redeemableSoftCap(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    redeemableUnderManagement(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setRedeemableSoftCap(
      softCap: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    vault(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdrawInsurance(
      amount: PromiseOrValue<BigNumberish>,
      receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdrawProfits(
      receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}