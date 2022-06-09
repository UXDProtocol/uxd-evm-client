import { ethers } from 'ethers';
import Controller from '../artifacts/UXDController.json';
import ERC20 from '../artifacts/ERC20.json';
import { Subject } from 'rxjs';
export class UXDController {
    constructor(provider, controllerAddress, uxdTokenAddress) {
        this.provider = provider;
        // clients can listen to events on these subjects
        this.mintSubject = new Subject();
        this.redeemSubject = new Subject();
        this.uxdApprovalSubject = new Subject();
        this.uxdTransferSubject = new Subject();
        this.controllerContract = new ethers.Contract(controllerAddress, Controller.abi, provider);
        this.uxdContract = new ethers.Contract(uxdTokenAddress, ERC20.abi, provider);
        this.registerEventListeners();
    }
    async mint(market, collateral, ethAmount, slippage, signer) {
        return await this.controllerContract.connect(signer).mint(market, collateral, ethAmount, slippage);
    }
    async redeem(market, collateral, uxdAmount, slippage, signer) {
        return await this.controllerContract.connect(signer).redeem(market, collateral, uxdAmount, slippage);
    }
    async mintWithEth(market, ethAmount, slippage, signer) {
        return await this.controllerContract.connect(signer).mintWithEth(market, slippage, { value: ethAmount });
    }
    async redeemEth(market, ethAmount, signer) {
        return await this.controllerContract.connect(signer).redeemEth(market, ethAmount);
    }
    async getCollateralInfo() {
        return await this.controllerContract.getCollateralInfo();
    }
    async approveUXD(spender, amount, signer) {
        return await this.uxdContract.connect(signer).approve(spender, amount);
    }
    async approveToken(contractAddress, spender, amount, signer) {
        const contract = new ethers.Contract(contractAddress, ERC20.abi, this.provider);
        return await contract.connect(signer).approve(spender, amount);
    }
    async allowance(contractAddress, account, spender) {
        const contract = new ethers.Contract(contractAddress, ERC20.abi, this.provider);
        return await contract.allowance(account, spender);
    }
    async uxdTotalSupply() {
        return this.uxdContract.totalSupply();
    }
    async mintedPerCollateral(token) {
        return this.controllerContract.mintedPerCollateral(token);
    }
    async redeemable(token) {
        return this.controllerContract.redeemable(token);
    }
    registerEventListeners() {
        this.controllerContract.on('Minted', async (res) => {
            console.log('Minted: ', res);
            this.mintSubject.next(res);
        });
        this.controllerContract.on('Redeemed', async (res) => {
            console.log('Redeemed: ', res);
            this.redeemSubject.next(res);
        });
        this.uxdContract.on('Approval', async (res) => {
            this.uxdApprovalSubject.next(res);
        });
        this.uxdContract.on('Transfer', async (res) => {
            this.uxdTransferSubject.next(res);
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWEsTUFBTSxFQUFVLE1BQU0sUUFBUSxDQUFDO0FBQ25ELE9BQU8sVUFBVSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3pELE9BQU8sS0FBSyxNQUFNLHlCQUF5QixDQUFDO0FBQzVDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFTL0IsTUFBTSxPQUFPLGFBQWE7SUFZeEIsWUFDWSxRQUEwQyxFQUNsRCxpQkFBeUIsRUFDekIsZUFBdUI7UUFGZixhQUFRLEdBQVIsUUFBUSxDQUFrQztRQVB0RCxpREFBaUQ7UUFDMUMsZ0JBQVcsR0FBaUIsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQUMvQyxrQkFBYSxHQUFpQixJQUFJLE9BQU8sRUFBTyxDQUFDO1FBQ2pELHVCQUFrQixHQUFpQixJQUFJLE9BQU8sRUFBTyxDQUFDO1FBQ3RELHVCQUFrQixHQUFpQixJQUFJLE9BQU8sRUFBTyxDQUFDO1FBTTNELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQzNDLGlCQUFpQixFQUNqQixVQUFVLENBQUMsR0FBRyxFQUNkLFFBQVEsQ0FDUCxDQUFDO1FBQ0osSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQ2xDLGVBQWUsRUFDZixLQUFLLENBQUMsR0FBRyxFQUNULFFBQVEsQ0FDWCxDQUFDO1FBQ0YsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVNLEtBQUssQ0FBQyxJQUFJLENBQ2IsTUFBYyxFQUNkLFVBQWtCLEVBQ2xCLFNBQW9CLEVBQ3BCLFFBQW1CLEVBQ25CLE1BQWM7UUFFaEIsT0FBTyxNQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENB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