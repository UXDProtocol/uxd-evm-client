import { providers } from "ethers"
import { UXDController } from "./UXDController"

export class UXDClient {
    protected readonly controller: UXDController;

    constructor({
        provider,
        controllerAddress,
        uxdTokenAddress,
        market
    }: {
        provider: providers.JsonRpcProvider;
        controllerAddress: string;
        uxdTokenAddress: string;
        market: string;
    }) {
        this.controller = new UXDController({
            provider,
            controllerAddress,
            uxdTokenAddress,
            market
        });
    }

    // TODO: more 
    public getController(): UXDController {
        return this.controller;
    }
}