import { ethers } from "ethers"
import { UXDController } from "./controller"

export class UXDClient {
    private controller: UXDController

    constructor(
        provider: ethers.providers.JsonRpcProvider, 
        controllerAddress: string, 
        uxdTokenAddress: string
        ) {
        this.controller = new UXDController(
            provider,
            controllerAddress,
            uxdTokenAddress
        )
    }

    // TODO: more 
    public getController(): UXDController {
        return this.controller;
    }
}