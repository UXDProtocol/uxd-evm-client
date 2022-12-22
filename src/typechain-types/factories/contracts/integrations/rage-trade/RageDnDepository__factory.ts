/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  RageDnDepository,
  RageDnDepositoryInterface,
} from "../../../../contracts/integrations/rage-trade/RageDnDepository";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_vault",
        type: "address",
      },
      {
        internalType: "address",
        name: "_controller",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "pnl",
        type: "int256",
      },
    ],
    name: "NoProfits",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "allowance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "NotApproved",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "NotContractAddress",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "NotController",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "softcap",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalRedeemable",
        type: "uint256",
      },
    ],
    name: "RedeemableSoftCapHit",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
    ],
    name: "UnsupportedAsset",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "assets",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "redeemable",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
    ],
    name: "Deposited",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "InsuranceDeposited",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "InsuranceWithdrawn",
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
        name: "caller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newSoftCap",
        type: "uint256",
      },
    ],
    name: "RedeemableSoftCapUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "assets",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "redeemable",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "shares",
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
        name: "caller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "assets",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "redeemable",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
    ],
    name: "Withdrawn",
    type: "event",
  },
  {
    inputs: [],
    name: "assetToken",
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
    name: "controller",
    outputs: [
      {
        internalType: "contract IUXDController",
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
        name: "assetAmount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [
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
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
    ],
    name: "depositInsurance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getDepositoryAssets",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDepositoryShares",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getUnrealizedPnl",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "insuranceDeposits",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "insuranceToken",
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
    name: "netAssetDeposits",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
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
    name: "realizedPnl",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
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
        name: "redeemableAmount",
        type: "uint256",
      },
    ],
    name: "redeem",
    outputs: [
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
    name: "redeemableSoftCap",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "redeemableUnderManagement",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
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
    inputs: [
      {
        internalType: "uint256",
        name: "softCap",
        type: "uint256",
      },
    ],
    name: "setRedeemableSoftCap",
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
    inputs: [],
    name: "vault",
    outputs: [
      {
        internalType: "contract IDnGmxSeniorVault",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "withdrawInsurance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "withdrawProfits",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001bcf38038062001bcf833981016040819052620000349162000318565b6200003f33620002a0565b6001808190555062000065826001600160a01b0316620002f060201b62000f4c1760201c565b620000935760405163a77cdf3160e01b81526001600160a01b03831660048201526024015b60405180910390fd5b620000b2816001600160a01b0316620002f060201b62000f4c1760201c565b620000dc5760405163a77cdf3160e01b81526001600160a01b03821660048201526024016200008a565b600280546001600160a01b038085166001600160a01b031992831681179093556003805491851691909216179055604080516338d52e0f60e01b815290516338d52e0f916004808201926020929091908290030181865afa15801562000146573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200016c919062000357565b600480546001600160a01b0319166001600160a01b03928316178155600254604080516338d52e0f60e01b8152905191909316926338d52e0f92818101926020929091908290030181865afa158015620001ca573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001f0919062000357565b600580546001600160a01b0319166001600160a01b0392831617905560035460408051632d7ecd1160e01b815290519190921691632d7ecd1191600480830192602092919082900301816000875af115801562000251573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000277919062000357565b600680546001600160a01b0319166001600160a01b0392909216919091179055506200037e9050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b03163b151590565b6001600160a01b03811681146200031557600080fd5b50565b600080604083850312156200032c57600080fd5b82516200033981620002ff565b60208401519092506200034c81620002ff565b809150509250929050565b6000602082840312156200036a57600080fd5b81516200037781620002ff565b9392505050565b611841806200038e6000396000f3fe608060405234801561001057600080fd5b50600436106101805760003560e01c8063715018a6116100d8578063de2b1ff21161008c578063f2fde38b11610066578063f2fde38b146102bb578063f77c4791146102ce578063fbfa77cf146102e157600080fd5b8063de2b1ff214610298578063e23d2b32146102ab578063f084c24b146102b357600080fd5b80638da5cb5b116100bd5780638da5cb5b146102755780639e708d4914610286578063be3519a21461028f57600080fd5b8063715018a61461025a57806389b211af1461026257600080fd5b80631e9a69501161013a5780633c94de54116101145780633c94de541461022b57806347e7ef24146102345780634f3de3a91461024757600080fd5b80631e9a6950146101fd5780631fdb6d1d146102105780632d7ecd111461021857600080fd5b8063071598681161016b57806307159868146101b657806309158de7146101e15780631083f761146101ea57600080fd5b8062362a7714610185578062d8aae91461019a575b600080fd5b6101986101933660046114d1565b6102f4565b005b6101a3600b5481565b6040519081526020015b60405180910390f35b6005546101c9906001600160a01b031681565b6040516001600160a01b0390911681526020016101ad565b6101a3600a5481565b6004546101c9906001600160a01b031681565b6101a361020b3660046114ec565b610491565b6101a361063d565b6006546101c9906001600160a01b031681565b6101a360075481565b6101a36102423660046114ec565b61072f565b610198610255366004611516565b61097f565b610198610b6e565b610198610270366004611516565b610bd4565b6000546001600160a01b03166101c9565b6101a360095481565b6101a360085481565b6101986102a6366004611542565b610d65565b6101a3610dfc565b6101a3610e46565b6101986102c93660046114d1565b610e6a565b6003546101c9906001600160a01b031681565b6002546101c9906001600160a01b031681565b6000546001600160a01b031633146103535760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b6002600154036103a55760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015260640161034a565b600260015560006103b4610e46565b9050600081136103f3576040517fb21ffb400000000000000000000000000000000000000000000000000000000081526004810182905260240161034a565b600254604051632d182be560e21b8152600481018390526001600160a01b0384811660248301523060448301528392169063b460af94906064016020604051808303816000875af115801561044c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610470919061155b565b5080600b600082825461048391906115a3565b909155505060018055505050565b6003546000906001600160a01b031633146104da576040517f66719b7a00000000000000000000000000000000000000000000000000000000815233600482015260240161034a565b6004546001600160a01b0384811691161461052c576040517fee84f40b0000000000000000000000000000000000000000000000000000000081526001600160a01b038416600482015260240161034a565b600061053783610f5b565b9050826008600082825461054b91906115b6565b92505081905550806009600082825461056491906115b6565b9091555050600254600354604051632d182be560e21b8152600481018490526001600160a01b039182166024820152306044820152600092919091169063b460af94906064016020604051808303816000875af11580156105c9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105ed919061155b565b604080518481526020810187905290810182905290915033907f75e161b3e824b114fc1a33274bd7091918dd4e639cede50b78b15a4eea956a219060600160405180910390a25090505b92915050565b6002546040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526000916001600160a01b0316906307a2d13a9082906370a0823190602401602060405180830381865afa1580156106a7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106cb919061155b565b6040518263ffffffff1660e01b81526004016106e991815260200190565b602060405180830381865afa158015610706573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061072a919061155b565b905090565b6003546000906001600160a01b03163314610778576040517f66719b7a00000000000000000000000000000000000000000000000000000000815233600482015260240161034a565b6004546001600160a01b038481169116146107ca576040517fee84f40b0000000000000000000000000000000000000000000000000000000081526001600160a01b038416600482015260240161034a565b81600960008282546107dc91906115a3565b9091555050600480546002546040517f095ea7b30000000000000000000000000000000000000000000000000000000081526001600160a01b039182169381019390935260248301859052169063095ea7b3906044016020604051808303816000875af1158015610851573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061087591906115c9565b506002546040517f6e553f65000000000000000000000000000000000000000000000000000000008152600481018490523060248201526000916001600160a01b031690636e553f65906044016020604051808303816000875af11580156108e1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610905919061155b565b9050600061091284611063565b9050806008600082825461092691906115a3565b90915550610934905061113e565b604080518581526020810183905290810183905233907f91ede45f04a37a7c170f5c1207df3b6bc748dc1e04ad5e917a241d0f52feada39060600160405180910390a2949350505050565b6000546001600160a01b031633146109d95760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161034a565b81600a60008282546109eb91906115a3565b9091555050600554610a08906001600160a01b031682308561118b565b6005546002546040517f095ea7b30000000000000000000000000000000000000000000000000000000081526001600160a01b0391821660048201526024810185905291169063095ea7b3906044016020604051808303816000875af1158015610a76573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a9a91906115c9565b506002546040517f6e553f65000000000000000000000000000000000000000000000000000000008152600481018490523060248201526001600160a01b0390911690636e553f65906044016020604051808303816000875af1158015610b05573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b29919061155b565b506040518281526001600160a01b0382169033907f27a53222ef7efd93a8a1530cf4a3d41220d5f26def9b04b88cdd34fb89f433f69060200160405180910390a35050565b6000546001600160a01b03163314610bc85760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161034a565b610bd26000611219565b565b6000546001600160a01b03163314610c2e5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161034a565b600260015403610c805760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015260640161034a565b600260018190555081600a6000828254610c9a91906115b6565b9091555050600254604051632d182be560e21b8152600481018490526001600160a01b0383811660248301523060448301529091169063b460af94906064016020604051808303816000875af1158015610cf8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d1c919061155b565b506040518281526001600160a01b0382169033907febca967c406b3238e3b50354b2ae287ad6f68959ee41bf7bfea1342c5fe05b0e9060200160405180910390a3505060018055565b6000546001600160a01b03163314610dbf5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161034a565b600781905560405181815233907f34bdcf409ce95f734fb7583240c6266616d468cf38e556801bdb3e7e8733a5559060200160405180910390a250565b6002546040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526000916001600160a01b0316906370a08231906024016106e9565b6000600a54600954610e5891906115a3565b610e6061063d565b61072a91906115eb565b6000546001600160a01b03163314610ec45760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161034a565b6001600160a01b038116610f405760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161034a565b610f4981611219565b50565b6001600160a01b03163b151590565b6000610637600660009054906101000a90046001600160a01b03166001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015610fb3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fd79190611612565b60048054604080517f313ce56700000000000000000000000000000000000000000000000000000000815290516001600160a01b039092169263313ce5679282820192602092908290030181865afa158015611037573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061105b9190611612565b849190611281565b60048054604080517f313ce5670000000000000000000000000000000000000000000000000000000081529051600093610637936001600160a01b03169263313ce56792818301926020928290030181865afa1580156110c7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110eb9190611612565b600660009054906101000a90046001600160a01b03166001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015611037573d6000803e3d6000fd5b6007546008541115610bd2576007546008546040517fdc681c5a0000000000000000000000000000000000000000000000000000000081526004810192909252602482015260440161034a565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd000000000000000000000000000000000000000000000000000000001790526112139085906112b7565b50505050565b600080546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600061128e83600a611719565b61129983600a611719565b6112a39086611728565b6112ad919061173f565b90505b9392505050565b600061130c826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166113a19092919063ffffffff16565b80519091501561139c578080602001905181019061132a91906115c9565b61139c5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161034a565b505050565b60606112ad8484600085856001600160a01b0385163b6114035760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161034a565b600080866001600160a01b0316858760405161141f919061179e565b60006040518083038185875af1925050503d806000811461145c576040519150601f19603f3d011682016040523d82523d6000602084013e611461565b606091505b509150915061147182828661147c565b979650505050505050565b6060831561148b5750816112b0565b82511561149b5782518084602001fd5b8160405162461bcd60e51b815260040161034a91906117ba565b80356001600160a01b03811681146114cc57600080fd5b919050565b6000602082840312156114e357600080fd5b6112b0826114b5565b600080604083850312156114ff57600080fd5b611508836114b5565b946020939093013593505050565b6000806040838503121561152957600080fd5b82359150611539602084016114b5565b90509250929050565b60006020828403121561155457600080fd5b5035919050565b60006020828403121561156d57600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b8082018082111561063757610637611574565b8181038181111561063757610637611574565b6000602082840312156115db57600080fd5b815180151581146112b057600080fd5b818103600083128015838313168383128216171561160b5761160b611574565b5092915050565b60006020828403121561162457600080fd5b815160ff811681146112b057600080fd5b600181815b8085111561167057816000190482111561165657611656611574565b8085161561166357918102915b93841c939080029061163a565b509250929050565b60008261168757506001610637565b8161169457506000610637565b81600181146116aa57600281146116b4576116d0565b6001915050610637565b60ff8411156116c5576116c5611574565b50506001821b610637565b5060208310610133831016604e8410600b84101617156116f3575081810a610637565b6116fd8383611635565b806000190482111561171157611711611574565b029392505050565b60006112b060ff841683611678565b808202811582820484141761063757610637611574565b600082611775577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b60005b8381101561179557818101518382015260200161177d565b50506000910152565b600082516117b081846020870161177a565b9190910192915050565b60208152600082518060208401526117d981604085016020870161177a565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fea2646970667358221220ffb0291b5bb683ba6af58cead0fde7776872d8268f5738d34d75fbc105a7352f64736f6c63430008110033";

type RageDnDepositoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RageDnDepositoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RageDnDepository__factory extends ContractFactory {
  constructor(...args: RageDnDepositoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _vault: PromiseOrValue<string>,
    _controller: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<RageDnDepository> {
    return super.deploy(
      _vault,
      _controller,
      overrides || {}
    ) as Promise<RageDnDepository>;
  }
  override getDeployTransaction(
    _vault: PromiseOrValue<string>,
    _controller: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_vault, _controller, overrides || {});
  }
  override attach(address: string): RageDnDepository {
    return super.attach(address) as RageDnDepository;
  }
  override connect(signer: Signer): RageDnDepository__factory {
    return super.connect(signer) as RageDnDepository__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RageDnDepositoryInterface {
    return new utils.Interface(_abi) as RageDnDepositoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RageDnDepository {
    return new Contract(address, _abi, signerOrProvider) as RageDnDepository;
  }
}
