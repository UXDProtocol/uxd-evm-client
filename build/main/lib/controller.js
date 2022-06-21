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
    constructor(provider, controllerAddress, uxdTokenAddress, market) {
        this.provider = provider;
        // clients can listen to events on these subjects
        this.mintSubject = new rxjs_1.Subject();
        this.redeemSubject = new rxjs_1.Subject();
        this.uxdApprovalSubject = new rxjs_1.Subject();
        this.uxdTransferSubject = new rxjs_1.Subject();
        this.controllerContract = new ethers_1.ethers.Contract(controllerAddress, UXDController_json_1.default.abi, provider);
        this.uxdContract = new ethers_1.ethers.Contract(uxdTokenAddress, ERC20_json_1.default.abi, provider);
        this.market = market;
        this.registerEventListeners();
    }
    async mint(collateral, ethAmount, slippage, signer) {
        return await this.controllerContract.connect(signer).mint(this.market, collateral, ethAmount, slippage);
    }
    async redeem(collateral, uxdAmount, slippage, signer) {
        return await this.controllerContract.connect(signer).redeem(this.market, collateral, uxdAmount, slippage);
    }
    async mintWithEth(ethAmount, slippage, signer) {
        return await this.controllerContract.connect(signer).mintWithEth(this.market, slippage, { value: ethAmount });
    }
    async redeemEth(uxdAmount, slippage, signer) {
        return await this.controllerContract.connect(signer).redeemEth(this.market, uxdAmount, slippage);
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
    async tokenBalance(contractAddress, account) {
        const contract = new ethers_1.ethers.Contract(contractAddress, ERC20_json_1.default.abi, this.provider);
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
exports.UXDController = UXDController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxtQ0FBbUQ7QUFDbkQseUZBQXlEO0FBQ3pELHlFQUE0QztBQUM1QywrQkFBK0I7QUFTL0IsTUFBYSxhQUFhO0lBYXhCLFlBQ1ksUUFBMEMsRUFDbEQsaUJBQXlCLEVBQ3pCLGVBQXVCLEVBQ3ZCLE1BQWM7UUFITixhQUFRLEdBQVIsUUFBUSxDQUFrQztRQVB0RCxpREFBaUQ7UUFDMUMsZ0JBQVcsR0FBaUIsSUFBSSxjQUFPLEVBQU8sQ0FBQztRQUMvQyxrQkFBYSxHQUFpQixJQUFJLGNBQU8sRUFBTyxDQUFDO1FBQ2pELHVCQUFrQixHQUFpQixJQUFJLGNBQU8sRUFBTyxDQUFDO1FBQ3RELHVCQUFrQixHQUFpQixJQUFJLGNBQU8sRUFBTyxDQUFDO1FBUTNELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLGVBQU0sQ0FBQyxRQUFRLENBQzNDLGlCQUFpQixFQUNqQiw0QkFBVSxDQUFDLEdBQUcsRUFDZCxRQUFRLENBQ1AsQ0FBQztRQUNKLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxlQUFNLENBQUMsUUFBUSxDQUNsQyxlQUFlLEVBQ2Ysb0JBQUssQ0FBQyxHQUFHLEVBQ1QsUUFBUSxDQUNYLENBQUM7UUFDRixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRU0sS0FBSyxDQUFDLElBQUksQ0FDYixVQUFrQixFQUNsQixTQUFvQixFQUNwQixRQUFtQixFQUNuQixNQUFjO1FBRWhCLE9BQU8sTUFBTSxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FDdkQsSUFBSSxDQUFDLE1BQU0sRUFDWCxVQUFVLEVBQ1YsU0FBUyxFQUNULFFB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