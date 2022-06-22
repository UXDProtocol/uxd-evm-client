import { BigNumber, Contract, ContractTransaction, providers, Signer } from 'ethers';
import { MintedEventObject, RedeemedEventObject, UXDControllerContract, UXDController as UXDControllerNamespace } from '../artifacts/types/UXDController';
import { ERC20 as ERC20Contract, ApprovalEventObject, TransferEventObject } from '../artifacts/types/ERC20';
import { Subject } from 'rxjs';
export interface CollateralInfo {
    symbol?: string;
    token: string;
    redeemable: BigNumber;
    minted: BigNumber;
}
export declare class UXDController {
    protected provider: providers.Provider;
    protected controllerContract: UXDControllerContract;
    protected uxdContract: ERC20Contract;
    readonly mintSubject: Subject<MintedEventObject>;
    readonly redeemSubject: Subject<RedeemedEventObject>;
    readonly uxdApprovalSubject: Subject<ApprovalEventObject>;
    readonly uxdTransferSubject: Subject<TransferEventObject>;
    constructor({ provider, controllerAddress, uxdTokenAddress, }: {
        provider: providers.Provider;
        controllerAddress: string;
        uxdTokenAddress: string;
    });
    mint({ market, collateral, ethAmount, slippage, signer, }: {
        market: string;
        collateral: string;
        ethAmount: BigNumber;
        slippage: BigNumber;
        signer: Signer;
    }): Promise<ContractTransaction>;
    redeem({ market, collateral, uxdAmount, slippage, signer, }: {
        market: string;
        collateral: string;
        uxdAmount: BigNumber;
        slippage: BigNumber;
        signer: Signer;
    }): Promise<ContractTransaction>;
    mintWithEth({ market, ethAmount, slippage, signer, }: {
        market: string;
        ethAmount: BigNumber;
        slippage: BigNumber;
        signer: Signer;
    }): Promise<ContractTransaction>;
    redeemEth({ market, uxdAmount, slippage, signer, }: {
        market: string;
        uxdAmount: BigNumber;
        slippage: BigNumber;
        signer: Signer;
    }): Promise<ContractTransaction>;
    getCollateralInfo(): Promise<UXDControllerNamespace.CollateralInfoStructOutput[]>;
    approveUXD({ spender, amount, signer, }: {
        spender: string;
        amount: BigNumber;
        signer: Signer;
    }): Promise<ContractTransaction>;
    approveToken({ contractAddress, spender, amount, signer, }: {
        contractAddress: string;
        spender: string;
        amount: BigNumber;
        signer: Signer;
    }): Promise<ContractTransaction>;
    allowance({ contractAddress, account, spender, }: {
        contractAddress: string;
        account: string;
        spender: string;
    }): Promise<BigNumber>;
    tokenBalance({ contractAddress, account, }: {
        contractAddress: string;
        account: string;
    }): Promise<BigNumber>;
    uxdTotalSupply(): Promise<BigNumber>;
    mintedPerCollateral(token: string): Promise<BigNumber>;
    redeemable(token: string): Promise<BigNumber>;
    protected arrayToObject<T extends Object>(keys: (keyof T)[], values: unknown[]): T;
    protected registerEventListener<T>(contract: Contract, eventName: string, subject: Subject<T>, keys: (keyof T)[]): void;
    protected registerEventListeners(): void;
}
