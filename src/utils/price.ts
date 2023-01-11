export function calculateMinAmountOut(price: number, slippage: number): number {
  return (price * (1_000 - slippage * 10)) / 1_000;
}
