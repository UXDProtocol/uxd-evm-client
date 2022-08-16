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
        name: "registryAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_weth",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Ctrl_Not_Approved",
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
    name: "Ctrl_Not_Whitelisted",
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
    name: "Ctrl_Transfer_Failed",
    type: "error",
  },
  {
    inputs: [],
    name: "ErrZeroAddress",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "governor",
        type: "address",
      },
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "NotGovernor",
    type: "error",
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
      {
        indexed: false,
        internalType: "bool",
        name: "isBaseToken",
        type: "bool",
      },
    ],
    name: "WhitelistUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "collateralDeposited",
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
        name: "market",
        type: "address",
      },
      {
        internalType: "address",
        name: "collateralToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "depositInsurance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getCollateralInfo",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "redeemable",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minted",
            type: "uint256",
          },
        ],
        internalType: "struct UXDController.CollateralInfo[]",
        name: "info",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "governor",
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
    name: "insuranceToken",
    outputs: [
      {
        internalType: "contract IERC20",
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
        name: "market",
        type: "address",
      },
      {
        internalType: "address",
        name: "collateralToken",
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
        internalType: "address",
        name: "market",
        type: "address",
      },
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "mintedPerCollateral",
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
    inputs: [
      {
        internalType: "address",
        name: "market",
        type: "address",
      },
      {
        internalType: "address",
        name: "collateralToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "redemptionAmount",
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
        internalType: "address",
        name: "market",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "redemptionAmount",
        type: "uint256",
      },
      {
        internalType: "uint160",
        name: "sqrtPriceLimitX96",
        type: "uint160",
      },
    ],
    name: "redeemEth",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "redeemable",
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
    name: "registry",
    outputs: [
      {
        internalType: "contract IContractRegistry",
        name: "",
        type: "address",
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
        name: "_token",
        type: "address",
      },
    ],
    name: "setInsuranceToken",
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
        name: "_token",
        type: "address",
      },
    ],
    name: "setToken",
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
    name: "uxdToken",
    outputs: [
      {
        internalType: "contract UXDToken",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "weth9",
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
    inputs: [
      {
        internalType: "address",
        name: "market",
        type: "address",
      },
      {
        internalType: "address",
        name: "collateralToken",
        type: "address",
      },
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
    name: "withdrawInsuranceTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052600880546001600160a01b03191690553480156200002157600080fd5b5060405162002322380380620023228339810160408190526200004491620000f8565b8162000050336200008b565b600180546001600160a01b039283166001600160a01b0319918216178255600291909155600d80549390921692169190911790555062000130565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80516001600160a01b0381168114620000f357600080fd5b919050565b600080604083850312156200010c57600080fd5b6200011783620000db565b91506200012760208401620000db565b90509250929050565b6121e280620001406000396000f3fe6080604052600436106101965760003560e01c80637110f915116100e15780638da5cb5b1161008a578063cffbc29711610064578063cffbc29714610481578063d765521a146104c1578063f2fde38b146104e1578063f887ea401461050157600080fd5b80638da5cb5b14610430578063986dfcc61461044e578063c0d786551461046157600080fd5b80637b103999116100bb5780637b103999146103d05780637d391f75146103f05780637f53376a1461041057600080fd5b80637110f9151461037b578063715018a61461039b5780637aaebe23146103b057600080fd5b80633024a91211610143578063484267a41161011d578063484267a41461030e57806350879c1c1461033b578063605b8de71461035b57600080fd5b80633024a9121461028c57806335678728146102ac57806337ffc324146102e157600080fd5b8063144fa6d711610174578063144fa6d7146102285780632e0bcb431461024a5780632e13168b1461026c57600080fd5b8063071598681461019b5780630a4b9ec2146101d85780630c340a2414610213575b600080fd5b3480156101a757600080fd5b506004546101bb906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b3480156101e457600080fd5b506102056101f3366004611d47565b600a6020526000908152604090205481565b6040519081526020016101cf565b34801561021f57600080fd5b506101bb610521565b34801561023457600080fd5b50610248610243366004611d47565b6105bc565b005b34801561025657600080fd5b5061025f610683565b6040516101cf9190611d64565b34801561027857600080fd5b50610248610287366004611dd4565b6107a7565b34801561029857600080fd5b506101bb6102a7366004611e1f565b610895565b3480156102b857600080fd5b506102cc6102c7366004611e38565b6108bf565b604080519283526020830191909152016101cf565b3480156102ed57600080fd5b506102056102fc366004611d47565b600b6020526000908152604090205481565b34801561031a57600080fd5b50610205610329366004611d47565b600c6020526000908152604090205481565b34801561034757600080fd5b50600d546101bb906001600160a01b031681565b34801561036757600080fd5b50610248610376366004611e38565b610b4d565b34801561038757600080fd5b50610248610396366004611d47565b610c5e565b3480156103a757600080fd5b50610248610cdc565b3480156103bc57600080fd5b506102cc6103cb366004611e8b565b610d42565b3480156103dc57600080fd5b506001546101bb906001600160a01b031681565b3480156103fc57600080fd5b506003546101bb906001600160a01b031681565b34801561041c57600080fd5b506102cc61042b366004611e38565b610e1b565b34801561043c57600080fd5b506000546001600160a01b03166101bb565b6102cc61045c366004611ec2565b610e39565b34801561046d57600080fd5b5061024861047c366004611d47565b610ff2565b34801561048d57600080fd5b506104b161049c366004611d47565b60066020526000908152604090205460ff1681565b60405190151581526020016101cf565b3480156104cd57600080fd5b506102486104dc366004611efb565b611070565b3480156104ed57600080fd5b506102486104fc366004611d47565b611365565b34801561050d57600080fd5b506005546101bb906001600160a01b031681565b600154604080517f0c340a2400000000000000000000000000000000000000000000000000000000815290516000926001600160a01b031691630c340a24916004808301926020929190829003018186803b15801561057f57600080fd5b505afa158015610593573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105b79190611f3c565b905090565b6105c4610521565b6001600160a01b0316336001600160a01b03161461062d576105e4610521565b6040517fb38400080000000000000000000000000000000000000000000000000000000081526001600160a01b0390911660048201523360248201526044015b60405180910390fd5b6001600160a01b03811661065457604051630ecc6fdf60e41b815260040160405180910390fd5b6003805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b60075460609067ffffffffffffffff8111156106a1576106a1611f59565b6040519080825280602002602001820160405280156106ff57816020015b6106ec604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b8152602001906001900390816106bf5790505b50905060005b6007548110156107a35760006007828154811061072457610724611f6f565b6000918252602080832090910154604080516060810182526001600160a01b03909216808352808552600c84528185205483850152808552600b909352928390205492810192909252845190925084908490811061078457610784611f6f565b602002602001018190525050808061079b90611f9b565b915050610705565b5090565b6107af610521565b6001600160a01b0316336001600160a01b0316146107cf576105e4610521565b6001600160a01b03831660009081526006602090815260408083208054861580157fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0092831617909255600990935292208054841515921691909117905561083e5761083983611447565b610847565b610847836114fc565b60408051831515815282151560208201526001600160a01b0385169133917fa1722c493396a9db8ab972a884fcc6028f1eb1a84c51a04316bb4293a263cb52910160405180910390a3505050565b600781815481106108a557600080fd5b6000918252602090912001546001600160a01b0316905081565b6001600160a01b038316600090815260066020526040812054819060ff1661091e576040517f799566630000000000000000000000000000000000000000000000000000000081526001600160a01b0386166004820152602401610624565b6040517fdd62ed3e0000000000000000000000000000000000000000000000000000000081523360048201819052306024830152869186906001600160a01b0384169063dd62ed3e9060440160206040518083038186803b15801561098257600080fd5b505afa158015610996573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109ba9190611fb6565b1015610a085760405162461bcd60e51b815260206004820152600d60248201527f43543a2021417070726f766564000000000000000000000000000000000000006044820152606401610624565b600554604051632c147b7560e01b81526001600160a01b038a81166004830152848116926323b872dd92859290911690632c147b759060240160206040518083038186803b158015610a5957600080fd5b505afa158015610a6d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a919190611f3c565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b1681526001600160a01b0392831660048201529116602482015260448101899052606401602060405180830381600087803b158015610af857600080fd5b505af1158015610b0c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b309190611fcf565b50610b3e888888888561160d565b93509350505094509492505050565b610b55610521565b6001600160a01b0316336001600160a01b031614610b75576105e4610521565b6001600160a01b038116610b9c57604051630ecc6fdf60e41b815260040160405180910390fd5b6001600160a01b0383166000908152600a602052604081208054849290610bc4908490611fec565b90915550506005546040517fd88c030e0000000000000000000000000000000000000000000000000000000081526001600160a01b03868116600483015285811660248301526044820185905283811660648301529091169063d88c030e90608401600060405180830381600087803b158015610c4057600080fd5b505af1158015610c54573d6000803e3d6000fd5b5050505050505050565b610c66610521565b6001600160a01b0316336001600160a01b031614610c86576105e4610521565b6001600160a01b038116610cad57604051630ecc6fdf60e41b815260040160405180910390fd5b6004805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6000546001600160a01b03163314610d365760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610624565b610d40600061196e565b565b600d54600090819081908190610d669088906001600160a01b0316888833306119cb565b600d546040517f2e1a7d4d000000000000000000000000000000000000000000000000000000008152600481018490529294509092506001600160a01b031690632e1a7d4d90602401600060405180830381600087803b158015610dc957600080fd5b505af1158015610ddd573d6000803e3d6000fd5b505060405133925084156108fc02915084906000818181858888f19350505050158015610e0e573d6000803e3d6000fd5b5090969095509350505050565b600080610e2c8686868633336119cb565b9150915094509492505050565b6000806000349050600d60009054906101000a90046001600160a01b03166001600160a01b031663d0e30db0826040518263ffffffff1660e01b81526004016000604051808303818588803b158015610e9157600080fd5b505af1158015610ea5573d6000803e3d6000fd5b5050600d54600554604051632c147b7560e01b81526001600160a01b038b81166004830152928316955063a9059cbb945091169150632c147b759060240160206040518083038186803b158015610efb57600080fd5b505afa158015610f0f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f339190611f3c565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b1681526001600160a01b03909116600482015260248101849052604401602060405180830381600087803b158015610f9357600080fd5b505af1158015610fa7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fcb9190611fcf565b50600d54610fe69086906001600160a01b031634873361160d565b92509250509250929050565b610ffa610521565b6001600160a01b0316336001600160a01b03161461101a576105e4610521565b6001600160a01b03811661104157604051630ecc6fdf60e41b815260040160405180910390fd5b6005805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b611078610521565b6001600160a01b0316336001600160a01b031614611098576105e4610521565b6040517fdd62ed3e0000000000000000000000000000000000000000000000000000000081523360048201819052306024830152839183906001600160a01b0384169063dd62ed3e9060440160206040518083038186803b1580156110fc57600080fd5b505afa158015611110573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111349190611fb6565b10156111825760405162461bcd60e51b815260206004820152600d60248201527f43543a2021417070726f766564000000000000000000000000000000000000006044820152606401610624565b600554604051632c147b7560e01b81526001600160a01b0387811660048301526000921690632c147b759060240160206040518083038186803b1580156111c857600080fd5b505afa1580156111dc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112009190611f3c565b6001600160a01b0386166000908152600a602052604081208054929350869290919061122d908490612003565b90915550506040517f23b872dd0000000000000000000000000000000000000000000000000000000081526001600160a01b0383811660048301528281166024830152604482018690528416906323b872dd90606401602060405180830381600087803b15801561129d57600080fd5b505af11580156112b1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112d59190611fcf565b506005546040517f449ee1420000000000000000000000000000000000000000000000000000000081526001600160a01b0388811660048301528781166024830152604482018790529091169063449ee14290606401600060405180830381600087803b15801561134557600080fd5b505af1158015611359573d6000803e3d6000fd5b50505050505050505050565b6000546001600160a01b031633146113bf5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610624565b6001600160a01b03811661143b5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610624565b6114448161196e565b50565b60005b60075481101561149c576007818154811061146757611467611f6f565b6000918252602090912001546001600160a01b038381169116141561148a575050565b8061149481611f9b565b91505061144a565b50600780546001810182556000919091527fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c68801805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b60001960005b600754811015611558576007818154811061151f5761151f611f6f565b6000918252602090912001546001600160a01b038481169116141561154657809150611558565b8061155081611f9b565b915050611502565b506000198114611609576007805461156e611f6f565b600091825260209091200154600780546001600160a01b03909216918390811061159a5761159a611f6f565b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555060078054806115d9576115d961201b565b6000828152602090208101600019908101805473ffffffffffffffffffffffffffffffffffffffff191690550190555b5050565b6000806000869050600061169c611697836001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b15801561165657600080fd5b505afa15801561166a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061168e9190612031565b89906012611ca9565b611cdd565b90506000600960008a6001600160a01b03166001600160a01b0316815260200190815260200160002060009054906101000a900460ff16905060006040518060c001604052808c6001600160a01b0316815260200184815260200183151581526020018b6001600160a01b031681526020018a8152602001896001600160a01b03168152509050600080600560009054906101000a90046001600160a01b03166001600160a01b031663b46e57f7846040518263ffffffff1660e01b81526004016117b79190600060c0820190506001600160a01b0380845116835260208401516020840152604084015115156040840152806060850151166060840152608084015160808401528060a08501511660a08401525092915050565b6040805180830381600087803b1580156117d057600080fd5b505af11580156117e4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118089190612054565b6001600160a01b038e166000908152600a60205260408120805493955091935083928e929190611839908490612003565b90915550506001600160a01b038d166000908152600c6020526040812080548e9290611866908490612003565b90915550506001600160a01b038d166000908152600b602052604081208054839290611893908490612003565b90915550506003546040517f40c10f190000000000000000000000000000000000000000000000000000000081526001600160a01b038c8116600483015260248201849052909116906340c10f1990604401600060405180830381600087803b1580156118ff57600080fd5b505af1158015611913573d6000803e3d6000fd5b505060408051868152602081018590526001600160a01b038e1693507f25b428dfde728ccfaddad7e29e4ac23c24ed7fd1a6e3e3f91894a9a073f5dfff92500160405180910390a250909c909b509950505050505050505050565b600080546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b038516600090815260066020526040812054819060ff16611a2a576040517f799566630000000000000000000000000000000000000000000000000000000081526001600160a01b0388166004820152602401610624565b6000611a3587611cdd565b6040805160e0810182526001600160a01b038c811682526020820184815260018385019081528d8316606085019081526000608086018181528e861660a088019081528d871660c0890190815260055499517f3e0202df000000000000000000000000000000000000000000000000000000008152895189166004820152965160248801529451151560448701529251861660648601525160848501529051841660a48401529051831660c48301529495509193928392911690633e0202df9060e4016040805180830381600087803b158015611b1157600080fd5b505af1158015611b25573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b499190612054565b6001600160a01b038d166000908152600a6020526040812080549395509193508492611b76908490611fec565b90915550506001600160a01b038b166000908152600c602052604081208054849290611ba3908490611fec565b90915550506001600160a01b038b166000908152600b602052604081208054839290611bd0908490611fec565b90915550506003546040517f9dc29fac0000000000000000000000000000000000000000000000000000000081526001600160a01b038a811660048301526024820184905290911690639dc29fac90604401600060405180830381600087803b158015611c3c57600080fd5b505af1158015611c50573d6000803e3d6000fd5b505060408051858152602081018590526001600160a01b038c1693507ff3a670cd3af7d64b488926880889d08a8585a138ff455227af6737339a1ec26292500160405180910390a2909b909a5098505050505050505050565b6000611cb683600a61215c565b611cc183600a61215c565b611ccb908661216b565b611cd5919061218a565b949350505050565b6000611cf182670ddd2935029d8000611cf7565b92915050565b6000611d0c8383670de0b6b3a7640000611d13565b9392505050565b828202811515841585830485141716611d2b57600080fd5b0492915050565b6001600160a01b038116811461144457600080fd5b600060208284031215611d5957600080fd5b8135611d0c81611d32565b602080825282518282018190526000919060409081850190868401855b82811015611db957815180516001600160a01b0316855286810151878601528501518585015260609093019290850190600101611d81565b5091979650505050505050565b801515811461144457600080fd5b600080600060608486031215611de957600080fd5b8335611df481611d32565b92506020840135611e0481611dc6565b91506040840135611e1481611dc6565b809150509250925092565b600060208284031215611e3157600080fd5b5035919050565b60008060008060808587031215611e4e57600080fd5b8435611e5981611d32565b93506020850135611e6981611d32565b9250604085013591506060850135611e8081611d32565b939692955090935050565b600080600060608486031215611ea057600080fd5b8335611eab81611d32565b9250602084013591506040840135611e1481611d32565b60008060408385031215611ed557600080fd5b8235611ee081611d32565b91506020830135611ef081611d32565b809150509250929050565b600080600060608486031215611f1057600080fd5b8335611f1b81611d32565b92506020840135611f2b81611d32565b929592945050506040919091013590565b600060208284031215611f4e57600080fd5b8151611d0c81611d32565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000600019821415611faf57611faf611f85565b5060010190565b600060208284031215611fc857600080fd5b5051919050565b600060208284031215611fe157600080fd5b8151611d0c81611dc6565b600082821015611ffe57611ffe611f85565b500390565b6000821982111561201657612016611f85565b500190565b634e487b7160e01b600052603160045260246000fd5b60006020828403121561204357600080fd5b815160ff81168114611d0c57600080fd5b6000806040838503121561206757600080fd5b505080516020909101519092909150565b600181815b808511156120b357816000190482111561209957612099611f85565b808516156120a657918102915b93841c939080029061207d565b509250929050565b6000826120ca57506001611cf1565b816120d757506000611cf1565b81600181146120ed57600281146120f757612113565b6001915050611cf1565b60ff84111561210857612108611f85565b50506001821b611cf1565b5060208310610133831016604e8410600b8410161715612136575081810a611cf1565b6121408383612078565b806000190482111561215457612154611f85565b029392505050565b6000611d0c60ff8416836120bb565b600081600019048311821515161561218557612185611f85565b500290565b6000826121a757634e487b7160e01b600052601260045260246000fd5b50049056fea2646970667358221220656f26dda63457fe9b4a00f980a3d6995e513d29ec2e366d4d95cb426ffabf8a64736f6c63430008090033";

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
    registryAddress: PromiseOrValue<string>,
    _weth: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<UXDController> {
    return super.deploy(
      registryAddress,
      _weth,
      overrides || {}
    ) as Promise<UXDController>;
  }
  override getDeployTransaction(
    registryAddress: PromiseOrValue<string>,
    _weth: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(registryAddress, _weth, overrides || {});
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
