import { ethers } from "ethers";
import { UXDController } from "./controller";
export declare class UXDClient {
    private controller;
    constructor(provider: ethers.providers.JsonRpcProvider, controllerAddress: string, uxdTokenAddress: string);
    getController(): UXDController;
}
