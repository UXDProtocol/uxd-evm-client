import { providers } from "ethers";
import { UXDController } from "./UXDController";
export declare class UXDClient {
    protected readonly controller: UXDController;
    constructor({ provider, controllerAddress, uxdTokenAddress, market }: {
        provider: providers.JsonRpcProvider;
        controllerAddress: string;
        uxdTokenAddress: string;
        market: string;
    });
    getController(): UXDController;
}
