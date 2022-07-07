import { BigNumber } from "ethers";
import bn from "bignumber.js";

bn.config({ EXPONENTIAL_AT: 999999, DECIMAL_PLACES: 18 });

export function encodePriceSqrt(price: string | number): BigNumber {
  return BigNumber.from(
    new bn(price)
      .sqrt()
      .multipliedBy(new bn(2).pow(96))
      .integerValue(3)
      .toString()
  );
}
