import { PerpetualProtocol } from "@perp/sdk-curie";

export class PerpInteractor {

    private perp: PerpetualProtocol;

    constructor({
        rpcEndpoint,
        chainId
    }:{
        rpcEndpoint: string,
        chainId: number
    }) {
        this.initializePerp(rpcEndpoint, chainId);
    }

    async initializePerp(rpcEndpoint: string, chainId: number) {
        this.perp = new PerpetualProtocol({
            chainId,
          providerConfigs: [ { rpcUrl: rpcEndpoint}] })
        await this.perp.init()
    }

    async getMarkPrice(tickerSymbol: string): Promise<number> {
        const prices = await this.perp.markets.getMarket({ tickerSymbol }).getPrices()
        return prices.markPrice.toNumber();
    }
}
