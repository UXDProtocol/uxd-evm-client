import { BigNumber } from "ethers";
import bn from "bignumber.js";

bn.config({ EXPONENTIAL_AT: 999999, DECIMAL_PLACES: 18 });

function bigNumberToBig(val: BigNumber, decimals: number): bn {
  return new bn(val.toString()).div(new bn(10).pow(decimals));
}
export function encodePriceSqrt(price: BigNumber): BigNumber {
  return BigNumber.from(
    new bn(price.toString())
      .sqrt()
      .multipliedBy(new bn(2).pow(96))
      .integerValue(3)
      .toString()
  );
}

export function formatSqrtPriceX96ToPrice(
  value: BigNumber,
  decimals: number
): string {
  return bigNumberToBig(value, 0)
    .div(new bn(2).pow(96))
    .pow(2)
    .dp(decimals)
    .toString();
}
