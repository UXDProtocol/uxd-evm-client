"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UXDController = void 0;
const rxjs_1 = require("rxjs");
const types_1 = require("../artifacts/types");
class UXDController {
    constructor({ provider, controllerAddress, uxdTokenAddress, }) {
        // clients can listen to events on these subjects
        this.mintSubject = new rxjs_1.Subject();
        this.redeemSubject = new rxjs_1.Subject();
        this.uxdApprovalSubject = new rxjs_1.Subject();
        this.uxdTransferSubject = new rxjs_1.Subject();
        this.provider = provider;
        this.controllerContract = types_1.UXDController__factory.connect(controllerAddress, this.provider);
        this.uxdContract = types_1.ERC20__factory.connect(uxdTokenAddress, this.provider);
        this.registerEventListeners();
    }
    mint({ market, collateral, ethAmount, slippage, signer, }) {
        return this.controllerContract.connect(signer).mint(market, collateral, ethAmount, slippage);
    }
    redeem({ market, collateral, uxdAmount, slippage, signer, }) {
        return this.controllerContract.connect(signer).redeem(market, collateral, uxdAmount, slippage);
    }
    mintWithEth({ market, ethAmount, slippage, signer, }) {
        return this.controllerContract.connect(signer).mintWithEth(market, slippage, {
            value: ethAmount,
        });
    }
    redeemEth({ market, uxdAmount, slippage, signer, }) {
        return this.controllerContract.connect(signer).redeemEth(market, uxdAmount, slippage);
    }
    // ???Rework returned infos???
    async getCollateralInfo() {
        return this.controllerContract.getCollateralInfo();
    }
    approveUXD({ spender, amount, signer, }) {
        return this.uxdContract.connect(signer).approve(spender, amount);
    }
    approveToken({ contractAddress, spender, amount, signer, }) {
        return types_1.ERC20__factory.connect(contractAddress, signer).connect(signer).approve(spender, amount);
    }
    allowance({ contractAddress, account, spender, }) {
        return types_1.ERC20__factory.connect(contractAddress, this.provider).allowance(account, spender);
    }
    tokenBalance({ contractAddress, account, }) {
        return types_1.ERC20__factory.connect(contractAddress, this.provider).balanceOf(account);
    }
    uxdTotalSupply() {
        return this.uxdContract.totalSupply();
    }
    mintedPerCollateral(token) {
        return this.controllerContract.mintedPerCollateral(token);
    }
    redeemable(token) {
        return this.controllerContract.redeemable(token);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVVhEQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvVVhEQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQSwrQkFBK0I7QUFDL0IsOENBQTRFO0FBUzVFLE1BQWEsYUFBYTtJQWF4QixZQUFZLEVBQ1YsUUFBUSxFQUNSLGlCQUFpQixFQUNqQixlQUFlLEdBS2hCO1FBZEQsaURBQWlEO1FBQ2pDLGdCQUFXLEdBQStCLElBQUksY0FBTyxFQUFxQixDQUFDO1FBQzNFLGtCQUFhLEdBQWlDLElBQUksY0FBTyxFQUF1QixDQUFDO1FBQ2pGLHVCQUFrQixHQUFpQyxJQUFJLGNBQU8sRUFBdUIsQ0FBQztRQUN0Rix1QkFBa0IsR0FBaUMsSUFBSSxjQUFPLEVBQXVCLENBQUM7UUFXcEcsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFFekIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLDhCQUFzQixDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0YsSUFBSSxDQUFDLFdBQVcsR0FBRyxzQkFBYyxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRTFFLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFTSxJQUFJLENBQUMsRUFDVixNQUFNLEVBQ04sVUFBVSxFQUNWLFNBQVMsRUFDVCxRQUFRLEVBQ1IsTUFBTSxHQU9QO1FBQ0MsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FDakQsTUFBTSxFQUNOLFVBQVUsRUFDVixTQUFTLEVBQ1QsUUFBUSxDQUNULENBQUM7SUFDSixDQUFDO0lBRU0sTUFBTSxDQUFDLEVBQ1osTUFBTSxFQUNOLFVBQVUsRUFDVixTQUFTLEVBQ1QsUUFBUSxFQUNSLE1BQU0sR0FP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