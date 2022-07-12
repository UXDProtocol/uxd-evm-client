export function calculateTargetPrice(price: number, slippage: number): number {
  return (price * (1000 - slippage * 10)) / 1000;
}
