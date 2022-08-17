import { ethers, providers } from "ethers";
import {
  PerpDepository__factory,
  PerpDepository as PerpDepositoryContract,
} from "../artifacts/types";

export class PerpDepository {
  private provider: providers.Provider;
  private depositoryContract: PerpDepositoryContract;

  constructor({
    provider,
    address,
  }: {
    provider: providers.Provider;
    address: string;
  }) {
    this.provider = provider;
    this.depositoryContract = PerpDepository__factory.connect(
      address,
      this.provider
    );
  }

  insuranceToken(): Promise<string> {
    return this.depositoryContract.insuranceToken();
  }

  collateralToken(): Promise<string> {
    return this.depositoryContract.collateralToken();
  }

  async exchangeFee(): Promise<number> {
    const fee = await this.depositoryContract.exchangeFee();
    return Number(ethers.utils.formatUnits(fee, "6"));
  }

  async totalFeesPaid(): Promise<number> {
    const feesPaid = await this.depositoryContract.totalFeesPaid();
    return Number(ethers.utils.formatEther(feesPaid));
  }

  async redeemableAmountPending(): Promise<number> {
    const amountPending =
      await this.depositoryContract.redeemableAmountPending();
    return Number(ethers.utils.formatEther(amountPending));
  }

  async redeemableSoftCap(): Promise<number> {
    const softCap = await this.depositoryContract.redeemableSoftCap();
    return Number(ethers.utils.formatEther(softCap));
  }
}