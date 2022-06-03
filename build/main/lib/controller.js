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
    async mint(market, collateral, amount, slippage, signer) {
        return await this.controllerContract.connect(signer).mint(market, collateral, amount, slippage);
    }
    async redeem(market, collateral, amount, slippage, signer) {
        return await this.controllerContract.connect(signer).redeem(market, collateral, amount, slippage);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxtQ0FBbUQ7QUFDbkQseUZBQXlEO0FBQ3pELHlFQUE0QztBQUM1QywrQkFBK0I7QUFTL0IsTUFBYSxhQUFhO0lBWXhCLFlBQ1ksUUFBMEMsRUFDbEQsaUJBQXlCLEVBQ3pCLGVBQXVCO1FBRmYsYUFBUSxHQUFSLFFBQVEsQ0FBa0M7UUFQdEQsaURBQWlEO1FBQzFDLGdCQUFXLEdBQWlCLElBQUksY0FBTyxFQUFPLENBQUM7UUFDL0Msa0JBQWEsR0FBaUIsSUFBSSxjQUFPLEVBQU8sQ0FBQztRQUNqRCx1QkFBa0IsR0FBaUIsSUFBSSxjQUFPLEVBQU8sQ0FBQztRQUN0RCx1QkFBa0IsR0FBaUIsSUFBSSxjQUFPLEVBQU8sQ0FBQztRQU0zRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxlQUFNLENBQUMsUUFBUSxDQUMzQyxpQkFBaUIsRUFDakIsNEJBQVUsQ0FBQyxHQUFHLEVBQ2QsUUFBUSxDQUNQLENBQUM7UUFDSixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksZUFBTSxDQUFDLFFBQVEsQ0FDbEMsZUFBZSxFQUNmLG9CQUFLLENBQUMsR0FBRyxFQUNULFFBQVEsQ0FDWCxDQUFDO1FBQ0YsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVNLEtBQUssQ0FBQyxJQUFJLENBQ2IsTUFBYyxFQUNkLFVBQWtCLEVBQ2xCLE1BQWlCLEVBQ2pCLFFBQW1CLEVBQ25CLE1BQWM7UUFFaEIsT0FBTyxNQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ2xHLENBQUM7SUFFTSxLQUFLLENBQUMsTUFBTSxDQUNm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