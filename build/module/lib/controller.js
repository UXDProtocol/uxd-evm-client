import { ethers } from 'ethers';
import Controller from '../artifacts/UXDController.json';
import ERC20 from '../artifacts/ERC20.json';
import { Subject } from 'rxjs';
export class UXDController {
    constructor(provider, controllerAddress, uxdTokenAddress, market) {
        this.provider = provider;
        // clients can listen to events on these subjects
        this.mintSubject = new Subject();
        this.redeemSubject = new Subject();
        this.uxdApprovalSubject = new Subject();
        this.uxdTransferSubject = new Subject();
        this.controllerContract = new ethers.Contract(controllerAddress, Controller.abi, provider);
        this.uxdContract = new ethers.Contract(uxdTokenAddress, ERC20.abi, provider);
        this.market = market;
        this.registerEventListeners();
    }
    async mint(amount, slippage, signer, collateralToken) {
        const ethAmount = ethers.utils.parseEther(amount.toString());
        const ethSlippage = ethers.utils.parseEther(slippage.toString());
        if (arguments.length == 4) {
            return await this.mintWithERC20(ethAmount, ethSlippage, signer, collateralToken);
        }
        else if (arguments.length == 3) {
            return await this.mintWithETH(ethAmount, ethSlippage, signer);
        }
    }
    async mintWithERC20(ethAmount, slippage, signer, collateral) {
        return await this.controllerContract
            .connect(signer)
            .mint(this.market, collateral, ethAmount, slippage);
    }
    async mintWithETH(ethAmount, slippage, signer) {
        return await this.controllerContract
            .connect(signer)
            .mintWithEth(this.market, slippage, { value: ethAmount });
    }
    async redeem(amount, slippage, signer, collateral) {
        const uxdAmount = ethers.utils.parseEther(amount.toString());
        const slippageAmount = ethers.utils.parseEther(slippage.toString());
        if (arguments.length == 4) {
            return await this.redeemERC20(uxdAmount, slippageAmount, signer, collateral);
        }
        else if (arguments.length == 3) {
            return await this.redeemEth(uxdAmount, slippageAmount, signer);
        }
    }
    async redeemERC20(uxdAmount, slippage, signer, collateral) {
        return await this.controllerContract
            .connect(signer)
            .redeem(this.market, collateral, uxdAmount, slippage);
    }
    async redeemEth(uxdAmount, slippage, signer) {
        return await this.controllerContract
            .connect(signer)
            .redeemEth(this.market, uxdAmount, slippage);
    }
    async getCollateralInfo() {
        return await this.controllerContract.getCollateralInfo();
    }
    async approveUXD(spender, amount, signer) {
        const uxdAmount = ethers.utils.parseEther(amount.toString());
        return await this.uxdContract.connect(signer).approve(spender, uxdAmount);
    }
    async approveToken(contractAddress, spender, amount, signer) {
        const ethAmount = ethers.utils.parseEther(amount.toString());
        const contract = new ethers.Contract(contractAddress, ERC20.abi, this.provider);
        return await contract.connect(signer).approve(spender, ethAmount);
    }
    async allowance(contractAddress, account, spender) {
        const contract = new ethers.Contract(contractAddress, ERC20.abi, this.provider);
        const allowance = await contract.allowance(account, spender);
        return Number(ethers.utils.formatEther(allowance));
    }
    async tokenBalance(contractAddress, account) {
        const contract = new ethers.Contract(contractAddress, ERC20.abi, this.provider);
        const balance = await contract.balanceOf(account);
        return Number(ethers.utils.formatEther(balance));
    }
    async uxdTotalSupply() {
        const totalSupply = await this.uxdContract.totalSupply();
        return Number(ethers.utils.formatEther(totalSupply));
    }
    async mintedPerCollateral(token) {
        const minted = await this.controllerContract.mintedPerCollateral(token);
        return Number(ethers.utils.formatEther(minted));
    }
    async getRedeemableCollateral(token) {
        const redeemable = await this.controllerContract.redeemable(token);
        return Number(ethers.utils.formatEther(redeemable));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQXVCLE1BQU0sRUFBVSxNQUFNLFFBQVEsQ0FBQztBQUM3RCxPQUFPLFVBQVUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN6RCxPQUFPLEtBQUssTUFBTSx5QkFBeUIsQ0FBQztBQUM1QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBUy9CLE1BQU0sT0FBTyxhQUFhO0lBY3hCLFlBQ1UsUUFBMEMsRUFDbEQsaUJBQXlCLEVBQ3pCLGVBQXVCLEVBQ3ZCLE1BQWM7UUFITixhQUFRLEdBQVIsUUFBUSxDQUFrQztRQVBwRCxpREFBaUQ7UUFDMUMsZ0JBQVcsR0FBaUIsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQUMvQyxrQkFBYSxHQUFpQixJQUFJLE9BQU8sRUFBTyxDQUFDO1FBQ2pELHVCQUFrQixHQUFpQixJQUFJLE9BQU8sRUFBTyxDQUFDO1FBQ3RELHVCQUFrQixHQUFpQixJQUFJLE9BQU8sRUFBTyxDQUFDO1FBUTNELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQzNDLGlCQUFpQixFQUNqQixVQUFVLENBQUMsR0FBRyxFQUNkLFFBQVEsQ0FDVCxDQUFDO1FBQ0YsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQ3BDLGVBQWUsRUFDZixLQUFLLENBQUMsR0FBRyxFQUNULFFBQVEsQ0FDVCxDQUFDO1FBQ0YsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVNLEtBQUssQ0FBQyxJQUFJLENBQ2YsTUFBYyxFQUNkLFFBQWdCLEVBQ2hCLE1BQWMsRUFDZCxlQUF3QjtRQUV4QixNQUFNLFNBQVMsR0FBRyxNQUFN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