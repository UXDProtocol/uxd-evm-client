export function calculateMinAmountOut(
  price: number,
  slippage: number,
  decimals: number
): number {
  return Number(((price * (1_000 - slippage * 10)) / 1_000).toFixed(decimals));
}
