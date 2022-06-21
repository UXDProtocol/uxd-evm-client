import { BigNumber, ethers, Signer } from 'ethers';
import { Subject } from 'rxjs';
export interface CollateralInfo {
    symbol?: string;
    token: string;
    redeemable: BigNumber;
    minted: BigNumber;
}
export declare class UXDController {
    private provider;
    private controllerContract;
    private uxdContract;
    private market;
    mintSubject: Subject<any>;
    redeemSubject: Subject<any>;
    uxdApprovalSubject: Subject<any>;
    uxdTransferSubject: Subject<any>;
    constructor(provider: ethers.providers.JsonRpcProvider, controllerAddress: string, uxdTokenAddress: string, market: string);
    mint(amount: number, slippage: number, signer: Signer, collateralToken?: string): Promise<any>;
    private mintWithERC20;
    private mintWithETH;
    redeem(amount: number, slippage: number, signer: Signer, collateral?: string): Promise<any>;
    private redeemERC20;
    private redeemEth;
    getCollateralInfo(): Promise<CollateralInfo>;
    approveUXD(spender: string, amount: number, signer: Signer): Promise<any>;
    approveToken(contractAddress: string, spender: string, amount: BigNumber, signer: Signer): Promise<any>;
    allowance(contractAddress: string, account: string, spender: string): Promise<number>;
    tokenBalance(contractAddress: string, account: string): Promise<number>;
    uxdTotalSupply(): Promise<number>;
    mintedPerCollateral(token: string): Promise<BigNumber>;
    redeemable(token: string): Promise<BigNumber>;
    private registerEventListeners;
}
