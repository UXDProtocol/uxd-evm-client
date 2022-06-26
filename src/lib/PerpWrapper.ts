import { PerpetualProtocol } from "@perp/sdk-curie";

export class PerpInteractor {
  private perp: PerpetualProtocol;

  constructor({ perp }: { perp: PerpetualProtocol }) {
    this.perp = perp;
  }

  static async initialize(
    rpcEndpoint: string,
    chainId: number
  ): Promise<PerpInteractor> {
    const perp = new PerpetualProtocol({
      chainId,
      providerConfigs: [{ rpcUrl: rpcEndpoint }],
    });
    await perp.init();
    return new PerpInteractor({ perp });
  }

  async getMarkPrice(tickerSymbol: string): Promise<number> {
    const prices = await this.perp.markets
      .getMarket({ tickerSymbol })
      .getPrices();
    return prices.markPrice.toNumber();
  }
}
