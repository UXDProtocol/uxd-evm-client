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
    async mint(market, collateral, amount, slippage, signer) {
        return await this.controllerContract.connect(signer).mint(market, collateral, amount, slippage);
    }
    async redeem(market, collateral, amount, slippage, signer) {
        return await this.controllerContract.connect(signer).redeem(market, collateral, amount, slippage);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWEsTUFBTSxFQUFVLE1BQU0sUUFBUSxDQUFDO0FBQ25ELE9BQU8sVUFBVSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3pELE9BQU8sS0FBSyxNQUFNLHlCQUF5QixDQUFDO0FBQzVDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFTL0IsTUFBTSxPQUFPLGFBQWE7SUFZeEIsWUFDWSxRQUEwQyxFQUNsRCxpQkFBeUIsRUFDekIsZUFBdUI7UUFGZixhQUFRLEdBQVIsUUFBUSxDQUFrQztRQVB0RCxpREFBaUQ7UUFDMUMsZ0JBQVcsR0FBaUIsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQUMvQyxrQkFBYSxHQUFpQixJQUFJLE9BQU8sRUFBTyxDQUFDO1FBQ2pELHVCQUFrQixHQUFpQixJQUFJLE9BQU8sRUFBTyxDQUFDO1FBQ3RELHVCQUFrQixHQUFpQixJQUFJLE9BQU8sRUFBTyxDQUFDO1FBTTNELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQzNDLGlCQUFpQixFQUNqQixVQUFVLENBQUMsR0FBRyxFQUNkLFFBQVEsQ0FDUCxDQUFDO1FBQ0osSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQ2xDLGVBQWUsRUFDZixLQUFLLENBQUMsR0FBRyxFQUNULFFBQVEsQ0FDWCxDQUFDO1FBQ0YsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVNLEtBQUssQ0FBQyxJQUFJLENBQ2IsTUFBYyxFQUNkLFVBQWtCLEVBQ2xCLE1BQWlCLEVBQ2pCLFFBQW1CLEVBQ25CLE1BQWM7UUFFaEIsT0FBTyxNQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENB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