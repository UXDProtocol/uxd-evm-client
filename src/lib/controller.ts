import { BigNumber, Contract, ethers, Signer } from 'ethers';
import Controller from '../artifacts/UXDController.json';
import ERC20 from '../artifacts/ERC20.json';
import { Subject } from 'rxjs';

export interface CollateralInfo {
  symbol?: string;
  token: string;
  redeemable: BigNumber;
  minted: BigNumber;
}

export class UXDController {
  // internal contracts
  private controllerContract: Contract;
  private uxdContract: Contract;

  // market to mint in
  private market: string;

  // clients can listen to events on these subjects
  public mintSubject: Subject<any> = new Subject<any>();
  public redeemSubject: Subject<any> = new Subject<any>();
  public uxdApprovalSubject: Subject<any> = new Subject<any>();
  public uxdTransferSubject: Subject<any> = new Subject<any>();

  constructor(
    private provider: ethers.providers.JsonRpcProvider,
    controllerAddress: string,
    uxdTokenAddress: string,
    market: string
  ) {
    this.controllerContract = new ethers.Contract(
      controllerAddress,
      Controller.abi,
      provider
    );
    this.uxdContract = new ethers.Contract(
      uxdTokenAddress,
      ERC20.abi,
      provider
    );
    this.market = market;
    this.registerEventListeners();
  }

  public async mint(
    amount: number,
    slippage: number,
    signer: Signer,
    collateralToken?: string
  ): Promise<any> {
    const ethAmount = ethers.utils.parseEther(amount.toString());
    const ethSlippage = ethers.utils.parseEther(slippage.toString());
    if (arguments.length == 4) {
      return await this.mintWithERC20(
        ethAmount,
        ethSlippage,
        signer,
        collateralToken,
      );
    } else if (arguments.length == 3) {
      return await this.mintWithETH(ethAmount, ethSlippage, signer);
    }
  }

  private async mintWithERC20(
    ethAmount: BigNumber,
    slippage: BigNumber,
    signer: Signer,
    collateral: string,
  ) {
    return await this.controllerContract
      .connect(signer)
      .mint(this.market, collateral, ethAmount, slippage);
  }

  private async mintWithETH(
    ethAmount: BigNumber,
    slippage: BigNumber,
    signer: Signer
  ): Promise<any> {
    return await this.controllerContract
      .connect(signer)
      .mintWithEth(this.market, slippage, { value: ethAmount });
  }

  public async redeem(
    amount: number,
    slippage: number,
    signer: Signer,
    collateral?: string,
  ): Promise<any> {
    const uxdAmount = ethers.utils.parseEther(amount.toString());
    const slippageAmount = ethers.utils.parseEther(slippage.toString());
    if (arguments.length == 4) {
      return await this.redeemERC20(uxdAmount, slippageAmount, signer, collateral)
    } else if (arguments.length == 3) {
      return await this.redeemEth(uxdAmount, slippageAmount, signer);
    }
  }

  private async redeemERC20(
    uxdAmount: BigNumber,
    slippage: BigNumber,
    signer: Signer,
    collateral: string,
  ): Promise<any> {
    return await this.controllerContract
      .connect(signer)
      .redeem(this.market, collateral, uxdAmount, slippage);
  }
  private async redeemEth(
    uxdAmount: BigNumber,
    slippage: BigNumber,
    signer: Signer
  ) {
    return await this.controllerContract
      .connect(signer)
      .redeemEth(this.market, uxdAmount, slippage);
  }

  public async getCollateralInfo(): Promise<CollateralInfo> {
    return await this.controllerContract.getCollateralInfo();
  }

  public async approveUXD(spender: string, amount: number, signer: Signer) {
    const uxdAmount = ethers.utils.parseEther(amount.toString());
    return await this.uxdContract.connect(signer).approve(spender, uxdAmount);
  }

  public async approveToken(
    contractAddress: string,
    spender: string,
    amount: BigNumber,
    signer: Signer
  ) {
    const ethAmount = ethers.utils.parseEther(amount.toString());
    const contract = new ethers.Contract(
      contractAddress,
      ERC20.abi,
      this.provider
    );
    return await contract.connect(signer).approve(spender, ethAmount);
  }

  public async allowance(
    contractAddress: string,
    account: string,
    spender: string
  ): Promise<number> {
    const contract = new ethers.Contract(
      contractAddress,
      ERC20.abi,
      this.provider
    );
    const allowance = await contract.allowance(account, spender);
    return Number(ethers.utils.formatEther(allowance));
  }

  public async tokenBalance(
    contractAddress: string,
    account: string
  ): Promise<number> {
    const contract = new ethers.Contract(
      contractAddress,
      ERC20.abi,
      this.provider
    );
    const balance = await contract.balanceOf(account);
    return Number(ethers.utils.formatEther(balance));
  }

  public async uxdTotalSupply(): Promise<number> {
    const totalSupply = await this.uxdContract.totalSupply();
    return Number(ethers.utils.formatEther(totalSupply));
  }

  public async mintedPerCollateral(token: string): Promise<number> {
    const minted = await this.controllerContract.mintedPerCollateral(token);
    return Number(ethers.utils.formatEther(minted));
  }

  public async getRedeemableCollateral(token: string): Promise<number> {
    const redeemable = await this.controllerContract.redeemable(token);
    return Number(ethers.utils.formatEther(redeemable));
  }

  private registerEventListeners() {
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
