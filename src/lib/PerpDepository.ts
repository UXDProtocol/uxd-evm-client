import { ethers, providers } from "ethers";
import {
  PerpDepository__factory,
  PerpDepository as PerpDepositoryContract,
} from "../artifacts/types";

export class PerpDepository {
  private provider: providers.JsonRpcProvider;
  private depositoryContract: PerpDepositoryContract;

  constructor({
    provider,
    address,
  }: {
    provider: providers.JsonRpcProvider;
    address: string;
  }) {
    this.provider = provider;
    this.depositoryContract = PerpDepository__factory.connect(
      address,
      this.provider
    );
  }

  quoteToken(): Promise<string> {
    return this.depositoryContract.quoteToken();
  }

  baseToken(): Promise<string> {
    return this.depositoryContract.baseToken();
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
      await this.depositoryContract.redeemableUnderManagement();
    return Number(ethers.utils.formatEther(amountPending));
  }

  async redeemableSoftCap(): Promise<number> {
    const softCap = await this.depositoryContract.redeemableSoftCap();
    return Number(ethers.utils.formatEther(softCap));
  }
}
