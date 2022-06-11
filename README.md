# UXD EVM client (v1)

Typescript library for interacting with the UXD contracts on EVM.

### To use

### Install the library
```javascript
npm i "uxd-evm-client@0.0.1-beta.3" 
```

### Import library code

You need to import the UXDController from the library as well as the ethers library
```typescript
import { ethers } from 'ethers';
import { UXDController }from 'uxd-evm-client';
```

### Initialize the controller
The controller must be ininitialized with following parameters:
1. JSON RPC provider pointing to the kovan optimism RPC endpoint. 
2. UXD Controller contract address on kovan optimism.
3. UXD token on kovan optimism.

The provider can be injected when using Metamask or other browser wallet

```typescript
const controllerAddress = "";
const uxdTokenAddress = "0x23901A57A4fE127ee5FfF31DdAB8FBAf83d0539C";

const provider = new ethers.providers.JsonRpcProvider("https://kovan.optimism.io")
const controller = new UXDController(
    provider,
    controllerAddress,
    uxdTokenAddress
);
```

### Interact with controller contract
You can then start calling functions on the controller

#### Get UXD total supply
```typescript
const totalSupply = await controller.uxdTotalSupply()
console.log('totalsupply = ', totalSupply);
```

#### Mint UXD with WETH
To mint with WETH can call the `mint()` function:
```typescript
await controller.mint(
      market
      collateralAddress,
      wethAmount,
      slippageAmount
      signer
    )
```
> Note: The controller must be approved to access the users WETH otherwise the call with revert with an error.

To approve the controller to spend WETH:
```typescript
await controller.approveToken(
      contractAddress,
      spender,
      amount,
      signer
    )
```

#### Mint UXD with ETH
```typescript
await controller.mintWithEth(
      market,
      ethAmount,
      slippage,
      signer, 
    )
```

No prior approval is required to mint with native ETH.

#### Redeem UXD for ETH
```typescript
await controller.redeem(
      market,
      wethAddress,
      uxdAmount,
      slippage,
      signer
    )
```

#### Redeem UXD for ETH
```typescript
await controller.redeemEth(
      market,
      uxdAmount,
      slippage,
      signer
    )
```

Check [here](https://github.com/UXDProtocol/uxd-evm-client/blob/main/src/lib/controller.ts) to see the list of public functions availale on the controller.


### Version
Version 1.0.0 has been unpublished.
Current version are tagged as beta 0.0.1-beta.X
