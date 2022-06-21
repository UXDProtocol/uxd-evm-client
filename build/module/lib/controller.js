import { ethers } from 'ethers';
import Controller from '../artifacts/UXDController.json';
import ERC20 from '../artifacts/ERC20.json';
import { Subject } from 'rxjs';
export class UXDController {
    constructor({ provider, controllerAddress, uxdTokenAddress, }) {
        // clients can listen to events on these subjects
        this.mintSubject = new Subject();
        this.redeemSubject = new Subject();
        this.uxdApprovalSubject = new Subject();
        this.uxdTransferSubject = new Subject();
        this.provider = provider;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQXVCLE1BQU0sRUFBcUIsTUFBTSxRQUFRLENBQUM7QUFDeEUsT0FBTyxVQUFVLE1BQU0saUNBQWlDLENBQUM7QUFDekQsT0FBTyxLQUFLLE1BQU0seUJBQXlCLENBQUM7QUFDNUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQVMvQixNQUFNLE9BQU8sYUFBYTtJQWF4QixZQUFZLEVBQ1YsUUFBUSxFQUNSLGlCQUFpQixFQUNqQixlQUFlLEdBS2hCO1FBZEQsaURBQWlEO1FBQzFDLGdCQUFXLEdBQWlCLElBQUksT0FBTyxFQUFPLENBQUM7UUFDL0Msa0JBQWEsR0FBaUIsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQUNqRCx1QkFBa0IsR0FBaUIsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQUN0RCx1QkFBa0IsR0FBaUIsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQVczRCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUV6QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUMzQyxpQkFBaUIsRUFDakIsVUFBVSxDQUFDLEdBQUcsRUFDZCxRQUFRLENBQ1QsQ0FBQztRQUVGLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUNwQyxlQUFlLEVBQ2YsS0FBSyxDQUFDLEdBQUcsRUFDVCxRQUFRLENBQ1QsQ0FBQztRQUVGLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFTSxLQUFLLENBQUMsSUFBSSxDQUNmLE1BQWMsRUFDZCxVQUFrQixFQUNsQixTQUFvQixFQUNwQixRQUFtQixFQUNuQixNQUFjO1FBRWQsT0FBTyxNQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUN2RCxNQUFNLEVBQ04sVUFBVSxFQUNWLFNBQVMsRUFDVCxRQUFRLENBQ1QsQ0FBQztJQUNKLENBQUM7SUFFTSxLQUFLLENBQUMsTUFBTSxDQUNqQixNQUFjLEVBQ2QsVUFBa0IsRUFDbEIsU0FBb0IsRUFDcEIsUUFBbUIsRUFDbkIsTUFBYztRQUVkLE9BQU8sTUFBTSxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FDekQsTUFBTSxFQUNOLFVBQVUsRUFDVixTQUFTLEVBQ1QsUUFBUSxDQUNULENBQUM7SUFDSixDQUFDO0lBRU0sS0FBSyxDQUFDLFdBQVcsQ0FDdEIsTUFBYyxFQUNkLFNBQW9CLEVBQ3BCLFFBQW1CLEVBQ25CLE1BQWM7UUFFZCxPQUFPLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQzlELE1BQU0sRUFDTixRQUFRLEVBQ1IsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQ3JCLENBQUM7SUFDSixDQUFDO0lBRU0sS0FBSyxDQUFDLFNBQVMsQ0FDcEIsTUFBYyxFQUNkLFNBQW9CLEVBQ3BCLFFBQW1CLEVBQ25CLE1BQWM7UUFFZCxPQUFPLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM5RixDQUFDO0lBRU0sS0FBSyxDQUFDLGlCQUFpQjtRQUM1QixPQUFPLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0QsQ0FBQztJQUVNLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBZSxFQUFFLE1BQWlCLEVBQUUsTUFBYztRQUN4RSxPQUFPLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRU0sS0FBSyxDQUFDLFlBQVksQ0FBQyxlQUF1QixFQUFFLE9BQWUsRUFBRSxNQUFpQixFQUFFLE1BQWM7UUFDbkcsTUFBTSxRQUFRLEdBQUcsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUNsQyxlQUFlLEVBQ2YsS0FBSyxDQUFDLEdBQUcsRUFDVCxJQUFJLENBQUMsUUFBUSxDQUNkLENBQUM7UUFDRixPQUFPLE1BQU0sUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFTSxLQUFLLENBQUMsU0FBUyxDQUFDLGVBQXVCLEVBQUUsT0FBZSxFQUFFLE9BQWU7UUFDOUUsTUFBTSxRQUFRLEdBQUcsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUNsQyxlQUFlLEVBQ2YsS0FBSyxDQUFDLEdBQUcsRUFDVCxJQUFJLENBQUMsUUFBUSxDQUNkLENBQUM7UUFDRixPQUFPLE1BQU0sUUFBUSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUE7SUFDbkQsQ0FBQztJQUVNLEtBQUssQ0FBQyxZQUFZLENBQUMsZUFBdUIsRUFBRSxPQUFlO1FBQ2hFLE1BQU0sUUFBUSxHQUFHLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FDbEMsZUFBZSxFQUNmLEtBQUssQ0FBQyxHQUFHLEVBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FDZCxDQUFDO1FBQ0YsT0FBTyxNQUFNLFFBQVEsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDMUMsQ0FBQztJQUVNLEtBQUssQ0FBQyxjQUFjO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRU0sS0FBSyxDQUFDLG1CQUFtQixDQUFDLEtBQWE7UUFDNUMsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDM0QsQ0FBQztJQUVNLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBYTtRQUNuQyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDbEQsQ0FBQztJQUVPLHNCQUFzQjtRQUM1QixJQUFJLENBQUMsa0JBQWtCLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUNsRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUNsRCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ3BFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ3BELENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ2pFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDN0QsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDekQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUNyRCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRiJ9