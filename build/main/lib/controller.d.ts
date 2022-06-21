import { BigNumber, Contract, providers, Signer } from 'ethers';
import { Subject } from 'rxjs';
export interface CollateralInfo {
    symbol?: string;
    token: string;
    redeemable: BigNumber;
    minted: BigNumber;
}
export declare class UXDController {
    protected provider: providers.JsonRpcProvider;
    protected controllerContract: Contract;
    protected uxdContract: Contract;
    mintSubject: Subject<any>;
    redeemSubject: Subject<any>;
    uxdApprovalSubject: Subject<any>;
    uxdTransferSubject: Subject<any>;
    constructor({ provider, controllerAddress, uxdTokenAddress, }: {
        provider: providers.JsonRpcProvider;
        controllerAddress: string;
        uxdTokenAddress: string;
    });
    mint(market: string, collateral: string, ethAmount: BigNumber, slippage: BigNumber, signer: Signer): Promise<any>;
    redeem(market: string, collateral: string, uxdAmount: BigNumber, slippage: BigNumber, signer: Signer): Promise<any>;
    mintWithEth(market: string, ethAmount: BigNumber, slippage: BigNumber, signer: Signer): Promise<any>;
    redeemEth(market: string, uxdAmount: BigNumber, slippage: BigNumber, signer: Signer): Promise<any>;
    getCollateralInfo(): Promise<CollateralInfo>;
    approveUXD(spender: string, amount: BigNumber, signer: Signer): Promise<any>;
    approveToken(contractAddress: string, spender: string, amount: BigNumber, signer: Signer): Promise<any>;
    allowance(contractAddress: string, account: string, spender: string): Promise<BigNumber>;
    tokenBalance(contractAddress: string, account: string): Promise<BigNumber>;
    uxdTotalSupply(): Promise<BigNumber>;
    mintedPerCollateral(token: string): Promise<BigNumber>;
    redeemable(token: string): Promise<BigNumber>;
    private registerEventListeners;
}
