import { providers } from "ethers";
import {
  ERC20,
  PerpDepository as PerpDepositoryContract,
  UXDController as UXDControllerContract,
} from "../artifacts/types";
import {
  ERC20__factory,
  PerpDepository__factory,
  UXDController__factory,
} from "../artifacts/types/factories";
import { PerpDepository } from "./PerpDepository";
import { UXDController } from "./UXDController";

export class UXDClient {
  protected readonly controller: UXDController;
  protected readonly depository: PerpDepository;

  // -- TEMPORARY --
  // IN ORDER TO EXPOSE CONTRACTS WAITING FOR PROPER UTILITIES FUNCTIONS TO BE IMPLEMENTED
  protected readonly provider: providers.JsonRpcProvider;
  protected readonly redeemable: string;
  protected readonly controllerAddress: string;
  protected readonly depositoryAddress: string;
  // ----------------

  constructor({
    provider,
    controller,
    depository,
    redeemable,
  }: {
    provider: providers.JsonRpcProvider;
    controller: string;
    depository: string;
    redeemable: string;
  }) {
    this.controller = new UXDController({
      provider,
      controller,
      redeemable,
    });

    this.depository = new PerpDepository({
      address: depository,
      provider,
    });

    this.provider = provider;
    this.redeemable = redeemable;
    this.controllerAddress = controller;
    this.depositoryAddress = depository;
  }

  // TODO: more
  public getController(): UXDController {
    return this.controller;
  }

  public getDepository(): PerpDepository {
    return this.depository;
  }

  // -- TEMPORARY --
  public getERC20Contract(): ERC20 {
    return ERC20__factory.connect(this.redeemable, this.provider);
  }

  public getUXDControllerContract(): UXDControllerContract {
    return UXDController__factory.connect(
      this.controllerAddress,
      this.provider
    );
  }

  public getPerpDepositoryContract(): PerpDepositoryContract {
    return PerpDepository__factory.connect(
      this.depositoryAddress,
      this.provider
    );
  }
  // ----------------
}
