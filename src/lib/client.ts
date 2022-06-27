import { providers } from 'ethers';
import { UXDController } from './UXDController';

export class UXDClient {
  protected readonly controller: UXDController;

  constructor({
    provider,
    controller,
    redeemable,
    market,
  }: {
    provider: providers.JsonRpcProvider;
    controller: string;
    redeemable: string;
    market: string;
  }) {
    this.controller = new UXDController({
      provider,
      controller,
      redeemable,
      market,
    });
  }

  // TODO: more
  public getController(): UXDController {
    return this.controller;
  }
}
