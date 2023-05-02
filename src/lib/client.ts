import { providers } from "ethers";
import { Address } from "./types";
import { UXDController } from "./UXDController";

export class UXDClient {
  public readonly provider: providers.JsonRpcProvider;

  public readonly redeemable: Address;
  public readonly controller: Address;

  public readonly uxdController: UXDController;

  constructor({
    provider,
    controller,
    redeemable,
  }: {
    provider: providers.JsonRpcProvider;
    controller: Address;
    redeemable: Address;
  }) {
    this.provider = provider;
    this.controller = controller;
    this.redeemable = redeemable;

    this.uxdController = new UXDController({
      provider,
      controller,
      redeemable,
    });
  }
}
