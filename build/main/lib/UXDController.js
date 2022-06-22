"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UXDController = void 0;
const ethers_1 = require("ethers");
const rxjs_1 = require("rxjs");
const types_1 = require("../artifacts/types");
class UXDController {
    constructor({ provider, controllerAddress, uxdTokenAddress, market }) {
        // clients can listen to events on these subjects
        this.mintSubject = new rxjs_1.Subject();
        this.redeemSubject = new rxjs_1.Subject();
        this.uxdApprovalSubject = new rxjs_1.Subject();
        this.uxdTransferSubject = new rxjs_1.Subject();
        this.provider = provider;
        this.market = market;
        this.controllerContract = types_1.UXDController__factory.connect(controllerAddress, this.provider);
        this.uxdContract = types_1.ERC20__factory.connect(uxdTokenAddress, this.provider);
        this.registerEventListeners();
    }
    async mint({ amount, slippage, signer, collateralToken, }) {
        const ethAmount = ethers_1.ethers.utils.parseEther(amount.toString());
        const ethSlippage = ethers_1.ethers.utils.parseEther(slippage.toString());
        if (arguments.length == 4) {
            return await this.mintWithERC20(ethAmount, ethSlippage, signer, collateralToken);
        }
        else if (arguments.length == 3) {
            return await this.mintWithETH(ethAmount, ethSlippage, signer);
        }
        else {
            throw Error("Invalid number of arguments");
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
    async redeem({ amount, slippage, signer, collateralToken, }) {
        const uxdAmount = ethers_1.ethers.utils.parseEther(amount.toString());
        const slippageAmount = ethers_1.ethers.utils.parseEther(slippage.toString());
        if (arguments.length == 4) {
            return await this.redeemERC20(uxdAmount, slippageAmount, signer, collateralToken);
        }
        else if (arguments.length == 3) {
            return await this.redeemEth(uxdAmount, slippageAmount, signer);
        }
        else {
            throw Error("Invalid number of arguments");
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
    // ???Rework returned infos???
    async getCollateralInfo() {
        return this.controllerContract.getCollateralInfo();
    }
    async approveUXD({ spender, amount, signer, }) {
        const uxdAmount = ethers_1.ethers.utils.parseEther(amount.toString());
        return await this.uxdContract.connect(signer).approve(spender, uxdAmount);
    }
    async approveToken({ contractAddress, spender, amount, signer, }) {
        const ethAmount = ethers_1.ethers.utils.parseEther(amount.toString());
        return await types_1.ERC20__factory.connect(contractAddress, signer).connect(signer).approve(spender, ethAmount);
    }
    async allowance({ contractAddress, account, spender, }) {
        const allowance = await types_1.ERC20__factory.connect(contractAddress, this.provider).allowance(account, spender);
        return Number(ethers_1.ethers.utils.formatEther(allowance));
    }
    async tokenBalance({ contractAddress, account, }) {
        const balance = await types_1.ERC20__factory.connect(contractAddress, this.provider).balanceOf(account);
        return Number(ethers_1.ethers.utils.formatEther(balance));
    }
    async uxdTotalSupply() {
        const totalSupply = await this.uxdContract.totalSupply();
        return Number(ethers_1.ethers.utils.formatEther(totalSupply));
    }
    async mintedPerCollateral(token) {
        const minted = await this.controllerContract.mintedPerCollateral(token);
        return Number(ethers_1.ethers.utils.formatEther(minted));
        ;
    }
    async getRedeemableCollateral(token) {
        const redeemable = await this.controllerContract.redeemable(token);
        return Number(ethers_1.ethers.utils.formatEther(redeemable));
    }
    // ===== utils
    // Transform values in an array into an object with named attributes
    // Use the position of the key and the value to match
    arrayToObject(keys, values) {
        return keys.reduce((obj, value, index) => obj[value] = values[index], {});
    }
    // Utility function that converts an event object received from the contract to a subject
    registerEventListener(contract, eventName, subject, keys) {
        contract.on(eventName, async (args) => {
            subject.next(this.arrayToObject(keys, args));
        });
    }
    registerEventListeners() {
        this.registerEventListener(this.controllerContract, 'Minted', this.mintSubject, ['account', 'base', 'quote']);
        this.registerEventListener(this.controllerContract, 'Redeemed', this.redeemSubject, ['account', 'base', 'quote']);
        this.registerEventListener(this.uxdContract, 'Approval', this.uxdApprovalSubject, ['owner', 'spender', 'value']);
        this.registerEventListener(this.uxdContract, 'Transfer', this.uxdTransferSubject, ['from', 'to', 'value']);
    }
}
exports.UXDController = UXDController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVVhEQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvVVhEQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtQ0FBNkY7QUFHN0YsK0JBQStCO0FBQy9CLDhDQUE0RTtBQVM1RSxNQUFhLGFBQWE7SUFnQnhCLFlBQVksRUFDVixRQUFRLEVBQ1IsaUJBQWlCLEVBQ2pCLGVBQWUsRUFDZixNQUFNLEVBTVA7UUFoQkQsaURBQWlEO1FBQ2pDLGdCQUFXLEdBQStCLElBQUksY0FBTyxFQUFxQixDQUFDO1FBQzNFLGtCQUFhLEdBQWlDLElBQUksY0FBTyxFQUF1QixDQUFDO1FBQ2pGLHVCQUFrQixHQUFpQyxJQUFJLGNBQU8sRUFBdUIsQ0FBQztRQUN0Rix1QkFBa0IsR0FBaUMsSUFBSSxjQUFPLEVBQXVCLENBQUM7UUFhcEcsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLDhCQUFzQixDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0YsSUFBSSxDQUFDLFdBQVcsR0FBRyxzQkFBYyxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRTFFLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFTSxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQ2hCLE1BQU0sRUFDTixRQUFRLEVBQ1IsTUFBTSxFQUNOLGVBQWUsR0FNaEI7UUFDQyxNQUFNLFNBQVMsR0FBRyxlQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUM3RCxNQUFNLFdBQVcsR0FBRyxlQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FB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