import { Subject } from 'rxjs';
import { ERC20__factory, UXDController__factory } from '../artifacts/types';
export class UXDController {
    provider;
    // internal contracts
    controllerContract;
    uxdContract;
    // clients can listen to events on these subjects
    mintSubject = new Subject();
    redeemSubject = new Subject();
    uxdApprovalSubject = new Subject();
    uxdTransferSubject = new Subject();
    constructor({ provider, controllerAddress, uxdTokenAddress, }) {
        this.provider = provider;
        this.controllerContract = UXDController__factory.connect(controllerAddress, this.provider);
        this.uxdContract = ERC20__factory.connect(uxdTokenAddress, this.provider);
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
        return ERC20__factory.connect(contractAddress, signer).connect(signer).approve(spender, amount);
    }
    allowance({ contractAddress, account, spender, }) {
        return ERC20__factory.connect(contractAddress, this.provider).allowance(account, spender);
    }
    tokenBalance({ contractAddress, account, }) {
        return ERC20__factory.connect(contractAddress, this.provider).balanceOf(account);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVVhEQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvVVhEQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxjQUFjLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQVM1RSxNQUFNLE9BQU8sYUFBYTtJQUNkLFFBQVEsQ0FBcUI7SUFFdkMscUJBQXFCO0lBQ1gsa0JBQWtCLENBQXdCO0lBQzFDLFdBQVcsQ0FBZ0I7SUFFckMsaURBQWlEO0lBQ2pDLFdBQVcsR0FBK0IsSUFBSSxPQUFPLEVBQXFCLENBQUM7SUFDM0UsYUFBYSxHQUFpQyxJQUFJLE9BQU8sRUFBdUIsQ0FBQztJQUNqRixrQkFBa0IsR0FBaUMsSUFBSSxPQUFPLEVBQXVCLENBQUM7SUFDdEYsa0JBQWtCLEdBQWlDLElBQUksT0FBTyxFQUF1QixDQUFDO0lBRXRHLFlBQVksRUFDVixRQUFRLEVBQ1IsaUJBQWlCLEVBQ2pCLGVBQWUsR0FLaEI7UUFDQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUV6QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsc0JBQXNCLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzRixJQUFJLENBQUMsV0FBVyxHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUUxRSxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRU0sSUFBSSxDQUFDLEVBQ1YsTUFBTSxFQUNOLFVBQVUsRUFDVixTQUFTLEVBQ1QsUUFBUSxFQUNSLE1BQU0sR0FPUDtRQUNDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJ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