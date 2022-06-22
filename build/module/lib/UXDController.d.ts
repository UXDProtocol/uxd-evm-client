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
    private market;
    readonly mintSubject: Subject<MintedEventObject>;
    readonly redeemSubject: Subject<RedeemedEventObject>;
    readonly uxdApprovalSubject: Subject<ApprovalEventObject>;
    readonly uxdTransferSubject: Subject<TransferEventObject>;
    constructor({ provider, controllerAddress, uxdTokenAddress, market }: {
        provider: providers.Provider;
        controllerAddress: string;
        uxdTokenAddress: string;
        market: string;
    });
    mint({ amount, slippage, signer, collateralToken, }: {
        amount: number;
        slippage: number;
        signer: Signer;
        collateralToken?: string;
    }): Promise<ContractTransaction>;
    private mintWithERC20;
    private mintWithETH;
    redeem({ amount, slippage, signer, collateralToken, }: {
        amount: number;
        slippage: number;
        signer: Signer;
        collateralToken: string;
    }): Promise<ContractTransaction>;
    private redeemERC20;
    private redeemEth;
    getCollateralInfo(): Promise<UXDControllerNamespace.CollateralInfoStructOutput[]>;
    approveUXD({ spender, amount, signer, }: {
        spender: string;
        amount: number;
        signer: Signer;
    }): Promise<ContractTransaction>;
    approveToken({ contractAddress, spender, amount, signer, }: {
        contractAddress: string;
        spender: string;
        amount: number;
        signer: Signer;
    }): Promise<ContractTransaction>;
    allowance({ contractAddress, account, spender, }: {
        contractAddress: string;
        account: string;
        spender: string;
    }): Promise<number>;
    tokenBalance({ contractAddress, account, }: {
        contractAddress: string;
        account: string;
    }): Promise<number>;
    uxdTotalSupply(): Promise<number>;
    mintedPerCollateral(token: string): Promise<number>;
    getRedeemableCollateral(token: string): Promise<number>;
    protected arrayToObject<T extends Object>(keys: (keyof T)[], values: unknown[]): T;
    protected registerEventListener<T>(contract: Contract, eventName: string, subject: Subject<T>, keys: (keyof T)[]): void;
    protected registerEventListeners(): void;
}
