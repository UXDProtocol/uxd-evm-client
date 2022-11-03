/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { UXDController, UXDControllerInterface } from "../UXDController";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "CtrlAddressNotContract",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "collateral",
        type: "address",
      },
    ],
    name: "CtrlNoDepository",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "CtrlNotApproved",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
    ],
    name: "CtrlNotQuoteToken",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "CtrlNotWhitelisted",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "CtrlTransferFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "CtrlZeroAmount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "base",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "quote",
        type: "uint256",
      },
    ],
    name: "Minted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "quoteAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "redeemabelAmount",
        type: "uint256",
      },
    ],
    name: "QuoteMinted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "quoteAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "redeemableAmount",
        type: "uint256",
      },
    ],
    name: "QuoteRedeemed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "quoteToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isQuote",
        type: "bool",
      },
    ],
    name: "QuoteTokenRegistered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "base",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "quote",
        type: "uint256",
      },
    ],
    name: "Redeemed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "by",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newRouter",
        type: "address",
      },
    ],
    name: "RouterUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "by",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isWhitelisted",
        type: "bool",
      },
    ],
    name: "WhitelistUpdated",
    type: "event",
  },
  {
    inputs: [],
    name: "VERSION",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "collateralList",
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
        name: "",
        type: "address",
      },
    ],
    name: "collateralTokens",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_weth",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "baseToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "collateralAmount",
        type: "uint256",
      },
      {
        internalType: "uint160",
        name: "sqrtPriceLimitX96",
        type: "uint160",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint160",
        name: "sqrtPriceLimitX96",
        type: "uint160",
      },
    ],
    name: "mintWithEth",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "quoteTokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "quoteAmount",
        type: "uint256",
      },
    ],
    name: "quoteMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "quoteTokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "redeemableAmount",
        type: "uint256",
      },
    ],
    name: "quoteRedeem",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "baseToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "redeemAmount",
        type: "uint256",
      },
      {
        internalType: "uint160",
        name: "sqrtPriceLimitX96",
        type: "uint160",
      },
    ],
    name: "redeem",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "redeemAmount",
        type: "uint256",
      },
      {
        internalType: "uint160",
        name: "sqrtPriceLimitX96",
        type: "uint160",
      },
    ],
    name: "redeemForEth",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "redeemable",
    outputs: [
      {
        internalType: "contract IRedeemable",
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
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "bool",
        name: "isQuote",
        type: "bool",
      },
    ],
    name: "registerQuoteToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "router",
    outputs: [
      {
        internalType: "contract IDEXRouter",
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
        name: "_redeemable",
        type: "address",
      },
    ],
    name: "setRedeemable",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
    ],
    name: "setRouter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "weth",
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
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "bool",
        name: "isWhitelisted",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "isBaseToken",
        type: "bool",
      },
    ],
    name: "whitelistCollateral",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60a06040523060805234801561001457600080fd5b5060805161302b61004c6000396000818161064d015281816106e301528181610bae01528181610c440152610d3f015261302b6000f3fe6080604052600436106101845760003560e01c80638da5cb5b116100d6578063cffbc2971161007f578063f2fde38b11610059578063f2fde38b14610440578063f887ea4014610460578063ffa1ad741461048057600080fd5b8063cffbc297146103cd578063d4cc8c781461040d578063f1e660b21461042057600080fd5b8063c4d66de8116100b0578063c4d66de81461036d578063ca25aee41461038d578063cc4431e7146103ad57600080fd5b80638da5cb5b146102fa578063a03332d914610318578063c0d786551461034d57600080fd5b8063385e44651161013857806352d1902d1161011257806352d1902d146102a2578063715018a6146102c557806387a5e739146102da57600080fd5b8063385e44651461024f5780633fc8cef31461026f5780634f1ef2861461028f57600080fd5b80632e13168b116101695780632e13168b146101ef5780633024a9121461020f5780633659cfe61461022f57600080fd5b806329175b59146101905780632d7ecd11146101b257600080fd5b3661018b57005b600080fd5b34801561019c57600080fd5b506101b06101ab366004612c5d565b6104cc565b005b3480156101be57600080fd5b5060fb546101d2906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b3480156101fb57600080fd5b506101b061020a366004612c88565b61053b565b34801561021b57600080fd5b506101d261022a366004612cd3565b610618565b34801561023b57600080fd5b506101b061024a366004612c5d565b610642565b34801561025b57600080fd5b506101b061026a366004612cec565b6107e0565b34801561027b57600080fd5b5060ff546101d2906001600160a01b031681565b6101b061029d366004612d2e565b610ba3565b3480156102ae57600080fd5b506102b7610d32565b6040519081526020016101e6565b3480156102d157600080fd5b506101b0610df7565b3480156102e657600080fd5b506101b06102f5366004612df2565b610e0b565b34801561030657600080fd5b5060c9546001600160a01b03166101d2565b34801561032457600080fd5b50610338610333366004612e2b565b610ea6565b604080519283526020830191909152016101e6565b34801561035957600080fd5b506101b0610368366004612c5d565b610f50565b34801561037957600080fd5b506101b0610388366004612c5d565b610fba565b34801561039957600080fd5b506101b06103a8366004612cec565b611145565b3480156103b957600080fd5b506103386103c8366004612e2b565b61159c565b3480156103d957600080fd5b506103fd6103e8366004612c5d565b60fd6020526000908152604090205460ff1681565b60405190151581526020016101e6565b61033861041b366004612c5d565b6118aa565b34801561042c57600080fd5b5061033861043b366004612e62565b611b0a565b34801561044c57600080fd5b506101b061045b366004612c5d565b611c61565b34801561046c57600080fd5b5060fc546101d2906001600160a01b031681565b34801561048c57600080fd5b50604080518082018252600581527f312e302e30000000000000000000000000000000000000000000000000000000602082015290516101e69190612eb3565b6104d4611cee565b6001600160a01b0381163b61050c576040516334f0e1ad60e11b81526001600160a01b03821660048201526024015b60405180910390fd5b60fb805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b610543611cee565b6001600160a01b0383163b610576576040516334f0e1ad60e11b81526001600160a01b0384166004820152602401610503565b6001600160a01b038316600090815260fd6020908152604080832080548615801560ff19928316179092556101009093529220805484151592169190911790556105c8576105c383611d48565b6105d1565b6105d183611dfd565b60405182151581526001600160a01b0384169033907fd9c6c3eabe38e3b9a606a66358d8f225489216a59eeba66facefb7d9166352669060200160405180910390a3505050565b60fe818154811061062857600080fd5b6000918252602090912001546001600160a01b0316905081565b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614156106e15760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f64656c656761746563616c6c00000000000000000000000000000000000000006064820152608401610503565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031661073c7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6001600160a01b0316146107b85760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f6163746976652070726f787900000000000000000000000000000000000000006064820152608401610503565b6107c181611f0d565b604080516000808252602082019092526107dd91839190611f15565b50565b600260655414156108335760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610503565b60026065558061086f576040517f9241029900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001600160a01b0382166000908152610101602052604090205460ff166108cd576040517f316d291d0000000000000000000000000000000000000000000000000000000081526001600160a01b0383166004820152602401610503565b60fb54604051636eb1769f60e11b815233600482018190523060248301529183916001600160a01b039091169063dd62ed3e9060440160206040518083038186803b15801561091b57600080fd5b505afa15801561092f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109539190612ee6565b10156109905760fb546040516307461df760e31b81526001600160a01b039182166004820152908216602482015260448101839052606401610503565b60fb546040517f9dc29fac0000000000000000000000000000000000000000000000000000000081526001600160a01b0383811660048301526024820185905290911690639dc29fac90604401600060405180830381600087803b1580156109f757600080fd5b505af1158015610a0b573d6000803e3d6000fd5b505060fc546040517f8277d97e0000000000000000000000000000000000000000000000000000000081526001600160a01b03878116600483015260248201879052600094509091169150638277d97e9060440160206040518083038186803b158015610a7757600080fd5b505afa158015610a8b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aaf9190612eff565b6040517f34e0e38b000000000000000000000000000000000000000000000000000000008152600481018590526001600160a01b0384811660248301529192506000918316906334e0e38b90604401602060405180830381600087803b158015610b1857600080fd5b505af1158015610b2c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b509190612ee6565b60408051828152602081018790529192506001600160a01b038516917f21cd5168f04017456107c8cd9c340084b5bf5cf323637dbbebb7d4e84dbc8c02910160405180910390a250506001606555505050565b306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161415610c425760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f64656c656761746563616c6c00000000000000000000000000000000000000006064820152608401610503565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316610c9d7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6001600160a01b031614610d195760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f6163746976652070726f787900000000000000000000000000000000000000006064820152608401610503565b610d2282611f0d565b610d2e82826001611f15565b5050565b6000306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610dd25760405162461bcd60e51b815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c00000000000000006064820152608401610503565b507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc90565b610dff611cee565b610e0960006120c9565b565b610e13611cee565b6001600160a01b0382163b610e46576040516334f0e1ad60e11b81526001600160a01b0383166004820152602401610503565b6001600160a01b03821660008181526101016020908152604091829020805460ff191685151590811790915591519182527fc8430dd019f6519ecf8340f9053d5554303919b4816864ad61d2ddde22b6cda2910160405180910390a25050565b60008060026065541415610efc5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610503565b60026065556040805160a0810182526001600160a01b0380881682526020820187905285169181019190915233606082018190526080820152610f3e81612128565b60016065559097909650945050505050565b610f58611cee565b6001600160a01b0381163b610f8b576040516334f0e1ad60e11b81526001600160a01b0382166004820152602401610503565b60fc805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b600054610100900460ff1615808015610fda5750600054600160ff909116105b80610ff45750303b158015610ff4575060005460ff166001145b6110665760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a65640000000000000000000000000000000000006064820152608401610503565b6000805460ff191660011790558015611089576000805461ff0019166101001790555b611091612553565b6110996125c6565b6110a1612639565b6001600160a01b0382163b6110d4576040516334f0e1ad60e11b81526001600160a01b0383166004820152602401610503565b60ff805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0384161790558015610d2e576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050565b600260655414156111985760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610503565b6002606555806111d4576040517f9241029900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001600160a01b0382166000908152610101602052604090205460ff16611232576040517f316d291d0000000000000000000000000000000000000000000000000000000081526001600160a01b0383166004820152602401610503565b604051636eb1769f60e11b81523360048201819052306024830152839183906001600160a01b0384169063dd62ed3e9060440160206040518083038186803b15801561127d57600080fd5b505afa158015611291573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112b59190612ee6565b10156112ee576040516307461df760e31b81526001600160a01b0380861660048301528216602482015260448101849052606401610503565b60fc546040517ff51a3fed0000000000000000000000000000000000000000000000000000000081526001600160a01b03868116600483015260248201869052600092169063f51a3fed9060440160206040518083038186803b15801561135457600080fd5b505afa158015611368573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061138c9190612eff565b6040517f23b872dd0000000000000000000000000000000000000000000000000000000081526001600160a01b038481166004830152808316602483015260448201879052919250908416906323b872dd90606401602060405180830381600087803b1580156113fb57600080fd5b505af115801561140f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114339190612f1c565b506040517fe4bdc4d2000000000000000000000000000000000000000000000000000000008152600481018590526000906001600160a01b0383169063e4bdc4d290602401602060405180830381600087803b15801561149257600080fd5b505af11580156114a6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114ca9190612ee6565b60fb546040517f40c10f190000000000000000000000000000000000000000000000000000000081526001600160a01b038681166004830152602482018490529293509116906340c10f1990604401600060405180830381600087803b15801561153357600080fd5b505af1158015611547573d6000803e3d6000fd5b505060408051888152602081018590526001600160a01b03871693507fe97109b4f33fd09a5a0ad4cf32b4accec44c4ad7a3ebe4aef309c24a90a5a69992500160405180910390a25050600160655550505050565b600080600260655414156115f25760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610503565b60026065556001600160a01b038516600090815260fd602052604090205460ff16611654576040517f56515bac0000000000000000000000000000000000000000000000000000000081526001600160a01b0386166004820152602401610503565b604051636eb1769f60e11b81523360048201819052306024830152869186906001600160a01b0384169063dd62ed3e9060440160206040518083038186803b15801561169f57600080fd5b505afa1580156116b3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116d79190612ee6565b1015611710576040516307461df760e31b81526001600160a01b0380891660048301528216602482015260448101879052606401610503565b60fc546040517f3455d7c40000000000000000000000000000000000000000000000000000000081526001600160a01b038981166004830152602482018990526000921690633455d7c49060440160206040518083038186803b15801561177657600080fd5b505afa15801561178a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117ae9190612eff565b6040517f23b872dd0000000000000000000000000000000000000000000000000000000081526001600160a01b0384811660048301528083166024830152604482018a9052919250908416906323b872dd90606401602060405180830381600087803b15801561181d57600080fd5b505af1158015611831573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118559190612f1c565b506040805160a0810182526001600160a01b03808b168252602082018a9052888116928201929092523360608201529082166080820152611895816126a4565b6001606555909a909950975050505050505050565b600080600260655414156119005760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610503565b600260655560ff5460fc546040517f3455d7c40000000000000000000000000000000000000000000000000000000081526001600160a01b03928316600482018190523460248301819052939092600092911690633455d7c49060440160206040518083038186803b15801561197557600080fd5b505afa158015611989573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119ad9190612eff565b905060ff60009054906101000a90046001600160a01b03166001600160a01b031663d0e30db0846040518263ffffffff1660e01b81526004016000604051808303818588803b1580156119ff57600080fd5b505af1158015611a13573d6000803e3d6000fd5b505060ff546040517fa9059cbb0000000000000000000000000000000000000000000000000000000081526001600160a01b03868116600483015260248201899052909116935063a9059cbb92506044019050602060405180830381600087803b158015611a8057600080fd5b505af1158015611a94573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ab89190612f1c565b506040805160a0810182526001600160a01b038085168252346020830152888116928201929092523360608201529082166080820152611af7816126a4565b6001606555909890975095505050505050565b60008060026065541415611b605760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610503565b60026065556040805160a08101825260ff546001600160a01b03908116825260208201879052851691810191909152336060820152306080820152600080611ba783612128565b60ff546040517f2e1a7d4d000000000000000000000000000000000000000000000000000000008152600481018490529294509092506001600160a01b031690632e1a7d4d90602401600060405180830381600087803b158015611c0a57600080fd5b505af1158015611c1e573d6000803e3d6000fd5b505060405133925084156108fc02915084906000818181858888f19350505050158015611c4f573d6000803e3d6000fd5b50600160655590969095509350505050565b611c69611cee565b6001600160a01b038116611ce55760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610503565b6107dd816120c9565b60c9546001600160a01b03163314610e095760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610503565b60005b60fe54811015611d9d5760fe8181548110611d6857611d68612f39565b6000918252602090912001546001600160a01b0383811691161415611d8b575050565b80611d9581612f4f565b915050611d4b565b5060fe80546001810182556000919091527f54075df80ec1ae6ac9100e1fd0ebf3246c17f5c933137af392011f4c5f61513a01805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b60001960005b60fe54811015611e595760fe8181548110611e2057611e20612f39565b6000918252602090912001546001600160a01b0384811691161415611e4757809150611e59565b80611e5181612f4f565b915050611e03565b506000198114610d2e5760fe8054611e6f612f39565b60009182526020909120015460fe80546001600160a01b039092169183908110611e9b57611e9b612f39565b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555060fe805480611eda57611eda612f78565b6000828152602090208101600019908101805473ffffffffffffffffffffffffffffffffffffffff191690550190555050565b6107dd611cee565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff1615611f4d57611f48836128e1565b505050565b826001600160a01b03166352d1902d6040518163ffffffff1660e01b815260040160206040518083038186803b158015611f8657600080fd5b505afa925050508015611fb6575060408051601f3d908101601f19168201909252611fb391810190612ee6565b60015b6120285760405162461bcd60e51b815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201527f6f6e206973206e6f7420555550530000000000000000000000000000000000006064820152608401610503565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc81146120bd5760405162461bcd60e51b815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f7860448201527f6961626c655555494400000000000000000000000000000000000000000000006064820152608401610503565b50611f488383836129ac565b60c980546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b80516001600160a01b0316600090815260fd6020526040812054819060ff1661218b5782516040517f56515bac0000000000000000000000000000000000000000000000000000000081526001600160a01b039091166004820152602401610503565b604080516080808201835260208681018051845287516001600160a01b039081169285019290925287850151821684860152918701518116606084015260fc548751925194517fe314e9fd000000000000000000000000000000000000000000000000000000008152928216600484015260248301949094529192600092169063e314e9fd9060440160206040518083038186803b15801561222c57600080fd5b505afa158015612240573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122649190612eff565b604080517f65c4f1260000000000000000000000000000000000000000000000000000000081528451600482015260208501516001600160a01b039081166024830152918501518216604482015260608501518216606482015291925060009182918416906365c4f126906084016040805180830381600087803b1580156122eb57600080fd5b505af11580156122ff573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123239190612f8e565b60fb5460608a0151604051636eb1769f60e11b81526001600160a01b039182166004820152306024820152939550919350839291169063dd62ed3e9060440160206040518083038186803b15801561237a57600080fd5b505afa15801561238e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123b29190612ee6565b10156123f35760fb5460608801516040516307461df760e31b81526001600160a01b0392831660048201529116602482015260448101829052606401610503565b60fb5460608801516040517f9dc29fac0000000000000000000000000000000000000000000000000000000081526001600160a01b03918216600482015260248101849052911690639dc29fac90604401600060405180830381600087803b15801561245e57600080fd5b505af1158015612472573d6000803e3d6000fd5b5050505060808701516040517f0af504cc000000000000000000000000000000000000000000000000000000008152600481018490526001600160a01b03918216602482015290841690630af504cc90604401600060405180830381600087803b1580156124df57600080fd5b505af11580156124f3573d6000803e3d6000fd5b5050505086606001516001600160a01b03167ff3a670cd3af7d64b488926880889d08a8585a138ff455227af6737339a1ec262838360405161253f929190918252602082015260400190565b60405180910390a290969095509350505050565b600054610100900460ff166125be5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610503565b610e096129d7565b600054610100900460ff166126315760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610503565b610e09612a4b565b600054610100900460ff16610e095760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610503565b6040805160608101825260208381015180835284516001600160a01b039081169284019290925284840151821683850152608085015193517fbad4a01f0000000000000000000000000000000000000000000000000000000081526004810191909152600093849392169063bad4a01f90602401600060405180830381600087803b15801561273257600080fd5b505af1158015612746573d6000803e3d6000fd5b505050506080840151604080517f79604f0c0000000000000000000000000000000000000000000000000000000081528351600482015260208401516001600160a01b0390811660248301529184015182166044820152600092839216906379604f0c906064016040805180830381600087803b1580156127c657600080fd5b505af11580156127da573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906127fe9190612f8e565b60fb5460608901516040517f40c10f190000000000000000000000000000000000000000000000000000000081526001600160a01b0391821660048201526024810184905293955091935016906340c10f1990604401600060405180830381600087803b15801561286e57600080fd5b505af1158015612882573d6000803e3d6000fd5b5050505085606001516001600160a01b03167f25b428dfde728ccfaddad7e29e4ac23c24ed7fd1a6e3e3f91894a9a073f5dfff83836040516128ce929190918252602082015260400190565b60405180910390a2909590945092505050565b6001600160a01b0381163b61295e5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201527f6f74206120636f6e7472616374000000000000000000000000000000000000006064820152608401610503565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6129b583612abd565b6000825111806129c25750805b15611f48576129d18383612afd565b50505050565b600054610100900460ff16612a425760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610503565b610e09336120c9565b600054610100900460ff16612ab65760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610503565b6001606555565b612ac6816128e1565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606001600160a01b0383163b612b7c5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f60448201527f6e747261637400000000000000000000000000000000000000000000000000006064820152608401610503565b600080846001600160a01b031684604051612b979190612fb2565b600060405180830381855af49150503d8060008114612bd2576040519150601f19603f3d011682016040523d82523d6000602084013e612bd7565b606091505b5091509150612bff8282604051806060016040528060278152602001612fcf60279139612c08565b95945050505050565b60608315612c17575081612c41565b825115612c275782518084602001fd5b8160405162461bcd60e51b81526004016105039190612eb3565b9392505050565b6001600160a01b03811681146107dd57600080fd5b600060208284031215612c6f57600080fd5b8135612c4181612c48565b80151581146107dd57600080fd5b600080600060608486031215612c9d57600080fd5b8335612ca881612c48565b92506020840135612cb881612c7a565b91506040840135612cc881612c7a565b809150509250925092565b600060208284031215612ce557600080fd5b5035919050565b60008060408385031215612cff57600080fd5b8235612d0a81612c48565b946020939093013593505050565b634e487b7160e01b600052604160045260246000fd5b60008060408385031215612d4157600080fd5b8235612d4c81612c48565b9150602083013567ffffffffffffffff80821115612d6957600080fd5b818501915085601f830112612d7d57600080fd5b813581811115612d8f57612d8f612d18565b604051601f8201601f19908116603f01168101908382118183101715612db757612db7612d18565b81604052828152886020848701011115612dd057600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b60008060408385031215612e0557600080fd5b8235612e1081612c48565b91506020830135612e2081612c7a565b809150509250929050565b600080600060608486031215612e4057600080fd5b8335612e4b81612c48565b9250602084013591506040840135612cc881612c48565b60008060408385031215612e7557600080fd5b823591506020830135612e2081612c48565b60005b83811015612ea2578181015183820152602001612e8a565b838111156129d15750506000910152565b6020815260008251806020840152612ed2816040850160208701612e87565b601f01601f19169190910160400192915050565b600060208284031215612ef857600080fd5b5051919050565b600060208284031215612f1157600080fd5b8151612c4181612c48565b600060208284031215612f2e57600080fd5b8151612c4181612c7a565b634e487b7160e01b600052603260045260246000fd5b6000600019821415612f7157634e487b7160e01b600052601160045260246000fd5b5060010190565b634e487b7160e01b600052603160045260246000fd5b60008060408385031215612fa157600080fd5b505080516020909101519092909150565b60008251612fc4818460208701612e87565b919091019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220005604209764c267e4804fdb90a5af083707eedc3f77cc012e4d071d365bf7a464736f6c63430008090033";

type UXDControllerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UXDControllerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UXDController__factory extends ContractFactory {
  constructor(...args: UXDControllerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<UXDController> {
    return super.deploy(overrides || {}) as Promise<UXDController>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): UXDController {
    return super.attach(address) as UXDController;
  }
  override connect(signer: Signer): UXDController__factory {
    return super.connect(signer) as UXDController__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UXDControllerInterface {
    return new utils.Interface(_abi) as UXDControllerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UXDController {
    return new Contract(address, _abi, signerOrProvider) as UXDController;
  }
}
