/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IUXDRouter,
  IUXDRouterInterface,
} from "../../../contracts/core/IUXDRouter";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "findDepositoryForAssetDeposit",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "redeemAmount",
        type: "uint256",
      },
    ],
    name: "findDepositoryForRedeem",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "depository",
        type: "address",
      },
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
    ],
    name: "registerDepository",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "depository",
        type: "address",
      },
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
    ],
    name: "unregisterDepository",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IUXDRouter__factory {
  static readonly abi = _abi;
  static createInterface(): IUXDRouterInterface {
    return new utils.Interface(_abi) as IUXDRouterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IUXDRouter {
    return new Contract(address, _abi, signerOrProvider) as IUXDRouter;
  }
}