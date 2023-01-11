# UXD EVM client (v1)

Typescript library for interacting with the UXD contracts on EVM.

## To Build

1. Build the package

```sh
npm run build
```

2. Run the linter to properly format typescript files.

```sh
npm run format
```

## To use

### Install the library

```javascript
npm i "uxd-evm-client@0.2.3"
```

### Generation of ethers-contracts types

https://github.com/dethcrypto/TypeChain

Run the following command that will generate typing for contracts:

```
 ./scripts/generate-types.sh
```

### Import library code

You need to import the UXDController from the library as well as the ethers library

```typescript
import { ethers } from "ethers";
import { UXDClient } from "uxd-evm-client";
```

### Initialize the client

The client must be initialized with following parameters:

1. JSON RPC provider pointing to the kovan optimism RPC endpoint.
2. UXD Controller contract address on kovan optimism.
3. The address of the depository
4. UXD token on kovan optimism.

The provider can be injected when using Metamask or other browser wallet

```typescript
const controller = "..."; // controller address
const depository = "..."; // depository address
const redeemable = "..."; // redeemable address

const provider = new ethers.providers.JsonRpcProvider("https://goerli.optimism.io");
const client = new UXDClient({
  provider,
  controller,
  depository
  redeemable
});
```

### Interact with controller contract

You can then start calling functions on the controller

#### Get UXD total supply

```typescript
const controller = client.controller();
const totalSupply = await controller.getRedeemableMintCirculatingSupply();
console.log("totalsupply = ", totalSupply);
```

#### Mint UXD with WETH

To mint with WETH can call the `mint()` function:

```typescript
await controller.mint(ethAmount, targetePrice, signer, collateralAddress);
```

> Note: The controller must be approved to access the users WETH otherwise the call with revert with an error.

To approve the controller to spend WETH:

```typescript
await controller.approveToken(contractAddress, spender, amount, signer);
```

#### Mint UXD with ETH

```typescript
await controller.mintWithEth(ethAmount, targetPrice, signer);
```

No prior approval is required to mint with native ETH.

#### Redeem UXD for ETH

```typescript
await controller.redeem(wethAddress, uxdAmount, targetPrice, signer);
```

#### Redeem UXD for ETH

```typescript
await controller.redeemEth(uxdAmount, targetPrice, signer);
```

Check [here](https://github.com/UXDProtocol/uxd-evm-client/blob/main/src/lib/controller.ts) to see the list of public functions availale on the controller.

### Version

Version 1.0.0 has been unpublished.
Current version are tagged as beta 0.0.1-beta.X
