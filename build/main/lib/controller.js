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
    async mint(amount, slippage, signer, collateralToken) {
        const ethAmount = ethers_1.ethers.utils.parseEther(amount.toString());
        const ethSlippage = ethers_1.ethers.utils.parseEther(slippage.toString());
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
        const uxdAmount = ethers_1.ethers.utils.parseEther(amount.toString());
        const slippageAmount = ethers_1.ethers.utils.parseEther(slippage.toString());
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
        const uxdAmount = ethers_1.ethers.utils.parseEther(amount.toString());
        return await this.uxdContract.connect(signer).approve(spender, uxdAmount);
    }
    async approveToken(contractAddress, spender, amount, signer) {
        const ethAmount = ethers_1.ethers.utils.parseEther(amount.toString());
        const contract = new ethers_1.ethers.Contract(contractAddress, ERC20_json_1.default.abi, this.provider);
        return await contract.connect(signer).approve(spender, ethAmount);
    }
    async allowance(contractAddress, account, spender) {
        const contract = new ethers_1.ethers.Contract(contractAddress, ERC20_json_1.default.abi, this.provider);
        const allowance = await contract.allowance(account, spender);
        return Number(ethers_1.ethers.utils.formatEther(allowance));
    }
    async tokenBalance(contractAddress, account) {
        const contract = new ethers_1.ethers.Contract(contractAddress, ERC20_json_1.default.abi, this.provider);
        const balance = await contract.balanceOf(account);
        return Number(ethers_1.ethers.utils.formatEther(balance));
    }
    async uxdTotalSupply() {
        const totalSupply = await this.uxdContract.totalSupply();
        return Number(ethers_1.ethers.utils.formatEther(totalSupply));
    }
    async mintedPerCollateral(token) {
        const minted = await this.controllerContract.mintedPerCollateral(token);
        return Number(ethers_1.ethers.utils.formatEther(minted));
    }
    async getRedeemableCollateral(token) {
        const redeemable = await this.controllerContract.redeemable(token);
        return Number(ethers_1.ethers.utils.formatEther(redeemable));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxtQ0FBNkQ7QUFDN0QseUZBQXlEO0FBQ3pELHlFQUE0QztBQUM1QywrQkFBK0I7QUFTL0IsTUFBYSxhQUFhO0lBY3hCLFlBQ1UsUUFBMEMsRUFDbEQsaUJBQXlCLEVBQ3pCLGVBQXVCLEVBQ3ZCLE1BQWM7UUFITixhQUFRLEdBQVIsUUFBUSxDQUFrQztRQVBwRCxpREFBaUQ7UUFDMUMsZ0JBQVcsR0FBaUIsSUFBSSxjQUFPLEVBQU8sQ0FBQztRQUMvQyxrQkFBYSxHQUFpQixJQUFJLGNBQU8sRUFBTyxDQUFDO1FBQ2pELHVCQUFrQixHQUFpQixJQUFJLGNBQU8sRUFBTyxDQUFDO1FBQ3RELHVCQUFrQixHQUFpQixJQUFJLGNBQU8sRUFBTyxDQUFDO1FBUTNELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLGVBQU0sQ0FBQyxRQUFRLENBQzNDLGlCQUFpQixFQUNqQiw0QkFBVSxDQUFDLEdBQUcsRUFDZCxRQUFRLENBQ1QsQ0FBQztRQUNGLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxlQUFNLENBQUMsUUFBUSxDQUNwQyxlQUFlLEVBQ2Ysb0JBQUssQ0FBQyxHQUFHLEVBQ1QsUUFBUSxDQUNULENBQUM7UUFDRixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRU0sS0FBSyxDQUFDLElBQUksQ0FDZixNQUFjLEVBQ2QsUUFBZ0IsRUFDaEIsTUFBYyxFQUNkLGVBQXdCO1FBRXhCLE1BQU0sU0FBUyxHQUFHLGVBQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQzdELE1BQU0sV0FBVyxHQUFHLGVBQU0sQ0FBQyxLQUFLLENB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