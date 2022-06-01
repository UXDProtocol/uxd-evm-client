# UXD EVM client (v1)

Typescript library for interacting with the UXD contracts on EVM.

### To use

#### Install the library
```javascript
npm i "UXDProtocol/uxd-evm-client" 
```

#### Import library code

You need to import the UXDController from the library as well as the ethers library
```typescript
import { ethers } from 'ethers';
import { UXDController }from 'uxd-evm-client';
```

#### Initialize the controller
The controller must be ininitialized with following parameters:
1. JSON RPC provider pointing to the kovan optimism RPC endpoint. 
2. UXD Controller contract address on kovan optimism.
3. UXD token on kovan optimism.

The provider can be injected when using Metamask or other browser wallet

```typescript
const provider = new ethers.providers.JsonRpcProvider("https://kovan.optimism.io")
const controller = new UXDController(
        provider,
        "0x73864663E5E8B3974D896AcE3Ce125e33d5d7c51",
        "0x02Bbb29C5ECAd50219215a400B10a161b77bc2DA");
```

You can then start calling functions on the controller

```typescript
const totalSupply = await controller.uxdTotalSupply()
    console.log('totalsupply = ', totalSupply);
```

Check this [here](https://github.com/UXDProtocol/uxd-evm-client/blob/main/src/lib/controller.ts) to see the list of public functions availale on the controller.

