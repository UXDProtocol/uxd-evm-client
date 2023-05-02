/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ISwapper,
  ISwapperInterface,
} from "../../../contracts/integrations/ISwapper";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "tokenIn",
            type: "address",
          },
          {
            internalType: "address",
            name: "tokenOut",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amountIn",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountOutMinimum",
            type: "uint256",
          },
          {
            internalType: "uint160",
            name: "sqrtPriceLimitX96",
            type: "uint160",
          },
          {
            internalType: "uint24",
            name: "poolFee",
            type: "uint24",
          },
        ],
        internalType: "struct SwapParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "swapExactInput",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class ISwapper__factory {
  static readonly abi = _abi;
  static createInterface(): ISwapperInterface {
    return new utils.Interface(_abi) as ISwapperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ISwapper {
    return new Contract(address, _abi, signerOrProvider) as ISwapper;
  }
}
