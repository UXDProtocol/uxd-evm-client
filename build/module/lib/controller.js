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
    async redeemEth(market, uxdAmount, slippage, signer) {
        return await this.controllerContract.connect(signer).redeemEth(market, uxdAmount, slippage);
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
    async tokenBalance(contractAddress, account) {
        const contract = new ethers.Contract(contractAddress, ERC20.abi, this.provider);
        return await contract.balanceOf(account);
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
        this.controllerContract.on('Minted', async (account, base, quote) => {
            this.mintSubject.next({ account, base, quote });
        });
        this.controllerContract.on('Redeemed', async (account, base, quote) => {
            this.redeemSubject.next({ account, base, quote });
        });
        this.uxdContract.on('Approval', async (account, spender, amount) => {
            this.uxdApprovalSubject.next({ account, spender, amount });
        });
        this.uxdContract.on('Transfer', async (from, to, amount) => {
            this.uxdTransferSubject.next({ from, to, amount });
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWEsTUFBTSxFQUFVLE1BQU0sUUFBUSxDQUFDO0FBQ25ELE9BQU8sVUFBVSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3pELE9BQU8sS0FBSyxNQUFNLHlCQUF5QixDQUFDO0FBQzVDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFTL0IsTUFBTSxPQUFPLGFBQWE7SUFZeEIsWUFDWSxRQUEwQyxFQUNsRCxpQkFBeUIsRUFDekIsZUFBdUI7UUFGZixhQUFRLEdBQVIsUUFBUSxDQUFrQztRQVB0RCxpREFBaUQ7UUFDMUMsZ0JBQVcsR0FBaUIsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQUMvQyxrQkFBYSxHQUFpQixJQUFJLE9BQU8sRUFBTyxDQUFDO1FBQ2pELHVCQUFrQixHQUFpQixJQUFJLE9BQU8sRUFBTyxDQUFDO1FBQ3RELHVCQUFrQixHQUFpQixJQUFJLE9BQU8sRUFBTyxDQUFDO1FBTTNELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQzNDLGlCQUFpQixFQUNqQixVQUFVLENBQUMsR0FBRyxFQUNkLFFBQVEsQ0FDUCxDQUFDO1FBQ0osSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQ2xDLGVBQWUsRUFDZixLQUFLLENBQUMsR0FBRyxFQUNULFFBQVEsQ0FDWCxDQUFDO1FBQ0YsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVNLEtBQUssQ0FBQyxJQUFJLENBQ2IsTUFBYyxFQUNkLFVBQWtCLEVBQ2xCLFNBQW9CLEVBQ3BCLFFBQW1CLEVBQ25CLE1BQWM7UUFFaEIsT0FBTyxNQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENB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