import { PerpetualProtocol } from "@perp/sdk-curie";

export class PerpWrapper {
    private perp: PerpetualProtocol;

    constructor({ perp }: { perp: PerpetualProtocol }) {
        this.perp = perp;
    }

    static async initialize(
        rpcEndpoint: string,
        chainId: number
    ): Promise<PerpWrapper> {
        const perp = new PerpetualProtocol({
            chainId,
            providerConfigs: [{ rpcUrl: rpcEndpoint }],
        });
        await perp.init();
        return new PerpWrapper({ perp });
    }

    async getMarkPrice(tickerSymbol: string): Promise<number> {
        const prices = await this.perp.markets
            .getMarket({ tickerSymbol })
            .getPrices();
        return prices.markPrice.toNumber();
    }
}