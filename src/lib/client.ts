import { providers } from "ethers";
import { ERC20Contract, PerpDepositoryContract, UXDControllerContract } from "..//artifacts/types";
import { ERC20__factory, PerpDepository__factory, UXDController__factory } from "..//artifacts/types/factories";
import { UXDController } from "./UXDController";

export class UXDClient {
  protected readonly controller: UXDController;

  // -- TEMPORARY --
  // IN ORDER TO EXPOSE CONTRACTS WAITING FOR PROPER UTILITIES FUNCTIONS TO BE IMPLEMENTED
  protected readonly provider: providers.JsonRpcProvider;
  protected readonly redeemable: string;
  protected readonly controllerAddress: string;
  protected readonly perpDepository: string;
  // ----------------

  constructor({
    provider,
    controller,
    redeemable,
    market,
    perpDepository,
  }: {
    provider: providers.JsonRpcProvider;
    controller: string;
    redeemable: string;
    market: string;
    perpDepository: string;
  }) {
    this.controller = new UXDController({
      provider,
      controller,
      redeemable,
      market,
    });

    this.provider = provider;
    this.redeemable = redeemable;
    this.controllerAddress = controller;
    this.perpDepository = perpDepository;
  }

  // TODO: more
  public getController(): UXDController {
    return this.controller;
  }

  // -- TEMPORARY --
  public getERC20Contract(): ERC20Contract {
    return ERC20__factory.connect(this.redeemable, this.provider);
  }

  public getUXDControllerContract(): UXDControllerContract {
    return UXDController__factory.connect(this.controllerAddress, this.provider);
  }

  public getPerpDepositoryContract(): PerpDepositoryContract {
    return PerpDepository__factory.connect(this.perpDepository, this.provider);
  }
  // ----------------
}
