"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UXDController = void 0;
const ethers_1 = require("ethers");
const UXDController_json_1 = __importDefault(require("../artifacts/UXDController.json"));
const ERC20_json_1 = __importDefault(require("../artifacts/ERC20.json"));
const rxjs_1 = require("rxjs");
class UXDController {
    constructor(provider, controllerAddress, uxdTokenAddress) {
        this.provider = provider;
        // clients can listen to events on these subjects
        this.mintSubject = new rxjs_1.Subject();
        this.redeemSubject = new rxjs_1.Subject();
        this.uxdApprovalSubject = new rxjs_1.Subject();
        this.uxdTransferSubject = new rxjs_1.Subject();
        this.controllerContract = new ethers_1.ethers.Contract(controllerAddress, UXDController_json_1.default.abi, provider);
        this.uxdContract = new ethers_1.ethers.Contract(uxdTokenAddress, ERC20_json_1.default.abi, provider);
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
        const contract = new ethers_1.ethers.Contract(contractAddress, ERC20_json_1.default.abi, this.provider);
        return await contract.connect(signer).approve(spender, amount);
    }
    async allowance(contractAddress, account, spender) {
        const contract = new ethers_1.ethers.Contract(contractAddress, ERC20_json_1.default.abi, this.provider);
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
exports.UXDController = UXDController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxtQ0FBbUQ7QUFDbkQseUZBQXlEO0FBQ3pELHlFQUE0QztBQUM1QywrQkFBK0I7QUFTL0IsTUFBYSxhQUFhO0lBWXhCLFlBQ1ksUUFBMEMsRUFDbEQsaUJBQXlCLEVBQ3pCLGVBQXVCO1FBRmYsYUFBUSxHQUFSLFFBQVEsQ0FBa0M7UUFQdEQsaURBQWlEO1FBQzFDLGdCQUFXLEdBQWlCLElBQUksY0FBTyxFQUFPLENBQUM7UUFDL0Msa0JBQWEsR0FBaUIsSUFBSSxjQUFPLEVBQU8sQ0FBQztRQUNqRCx1QkFBa0IsR0FBaUIsSUFBSSxjQUFPLEVBQU8sQ0FBQztRQUN0RCx1QkFBa0IsR0FBaUIsSUFBSSxjQUFPLEVBQU8sQ0FBQztRQU0zRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxlQUFNLENBQUMsUUFBUSxDQUMzQyxpQkFBaUIsRUFDakIsNEJBQVUsQ0FBQyxHQUFHLEVBQ2QsUUFBUSxDQUNQLENBQUM7UUFDSixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksZUFBTSxDQUFDLFFBQVEsQ0FDbEMsZUFBZSxFQUNmLG9CQUFLLENBQUMsR0FBRyxFQUNULFFBQVEsQ0FDWCxDQUFDO1FBQ0YsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVNLEtBQUssQ0FBQyxJQUFJLENBQ2IsTUFBYyxFQUNkLFVBQWtCLEVBQ2xCLFNBQW9CLEVBQ3BCLFFBQW1CLEVBQ25CLE1BQWM7UUFFaEIsT0FBTyxNQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUN2RCxNQUFNLEVBQ04sVUFBVSxFQUNWLFNBQVMsRUFDVCxRQUFRLENBQ1QsQ0FBQztJQUNKLENBQUM7SUFFTSxLQUFLLENBQUMsTUFBTSxDQUNm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