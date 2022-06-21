import { providers } from "ethers"
import { UXDController } from "./UXDController"

export class UXDClient {
    protected readonly controller: UXDController;

    constructor({
        provider,
        controllerAddress,
        uxdTokenAddress
    }: {
        provider: providers.JsonRpcProvider;
        controllerAddress: string;
        uxdTokenAddress: string;
    }) {
        this.controller = new UXDController({
            provider,
            controllerAddress,
            uxdTokenAddress
        });
    }

    // TODO: more 
    public getController(): UXDController {
        return this.controller;
    }
}