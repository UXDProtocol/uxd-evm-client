import { providers } from "ethers";
import { UXDController } from "./UXDController";
export declare class UXDClient {
    protected readonly controller: UXDController;
    constructor({ provider, controllerAddress, uxdTokenAddress }: {
        provider: providers.JsonRpcProvider;
        controllerAddress: string;
        uxdTokenAddress: string;
    });
    getController(): UXDController;
}
