import { providers } from 'ethers';
import { UXDController } from './UXDController';

export class UXDClient {
  protected readonly controller: UXDController;

  constructor({
    provider,
    controller,
    uxdToken,
    market,
  }: {
    provider: providers.JsonRpcProvider;
    controller: string;
    uxdToken: string;
    market: string;
  }) {
    this.controller = new UXDController({
      provider,
      controller,
      uxdToken,
      market,
    });
  }

  // TODO: more
  public getController(): UXDController {
    return this.controller;
  }
}
