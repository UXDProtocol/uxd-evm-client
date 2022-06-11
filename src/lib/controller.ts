import { BigNumber, ethers, Signer } from 'ethers';
import Controller from '../artifacts/UXDController.json';
import ERC20 from '../artifacts/ERC20.json';
import { Subject } from 'rxjs';

export interface CollateralInfo {
  symbol?: string
  token: string
  redeemable: BigNumber
  minted: BigNumber
}

export class UXDController {

  // internal contracts
  private controllerContract: any;
  private uxdContract: any;

  // clients can listen to events on these subjects
  public mintSubject: Subject<any> = new Subject<any>();
  public redeemSubject: Subject<any> = new Subject<any>();
  public uxdApprovalSubject: Subject<any> = new Subject<any>();
  public uxdTransferSubject: Subject<any> = new Subject<any>();

  constructor(
      private provider: ethers.providers.JsonRpcProvider, 
      controllerAddress: string,
      uxdTokenAddress: string) {
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
    this.registerEventListeners();
  }

  public async mint(
      market: string, 
      collateral: string, 
      ethAmount: BigNumber,
      slippage: BigNumber,
      signer: Signer
    ): Promise<any> {
    return await this.controllerContract.connect(signer).mint(
      market, 
      collateral, 
      ethAmount, 
      slippage
    );
  }

  public async redeem(
      market: string, 
      collateral: string, 
      uxdAmount: BigNumber,
      slippage: BigNumber,
      signer: Signer
    ): Promise<any> {
    return await this.controllerContract.connect(signer).redeem(
      market, 
      collateral, 
      uxdAmount, 
      slippage
    );
  }

  public async mintWithEth(
    market: string,
    ethAmount: BigNumber,
    slippage: BigNumber,
    signer: Signer
  ) {
    return await this.controllerContract.connect(signer).mintWithEth(
      market, 
      slippage, 
      {value: ethAmount}
    );
  }

  public async redeemEth(
    market: string,
    uxdAmount: BigNumber,
    slippage: BigNumber,
    signer: Signer
  ) {
    return await this.controllerContract.connect(signer).redeemEth(market, uxdAmount, slippage);
  }

  public async getCollateralInfo(): Promise<CollateralInfo> {
    return await this.controllerContract.getCollateralInfo();
  }

  public async approveUXD(spender: string, amount: BigNumber, signer: Signer) {
    return await this.uxdContract.connect(signer).approve(spender, amount);
  }

  public async approveToken(contractAddress: string, spender: string, amount: BigNumber, signer: Signer) {
    const contract = new ethers.Contract(
      contractAddress,
      ERC20.abi,
      this.provider
    );
    return await contract.connect(signer).approve(spender, amount);
  }

  public async allowance(contractAddress: string, account: string, spender: string): Promise<BigNumber> {
    const contract = new ethers.Contract(
      contractAddress,
      ERC20.abi,
      this.provider
    );
    return await contract.allowance(account, spender)
  }

  public async tokenBalance(contractAddress: string, account: string): Promise<BigNumber> {
    const contract = new ethers.Contract(
      contractAddress,
      ERC20.abi,
      this.provider
    );
    return await contract.balanceOf(account) 
  }

  public async uxdTotalSupply(): Promise<BigNumber> {
    return this.uxdContract.totalSupply();
  }

  public async mintedPerCollateral(token: string): Promise<BigNumber> {
    return this.controllerContract.mintedPerCollateral(token)
  }
  
  public async redeemable(token: string): Promise<BigNumber> {
    return this.controllerContract.redeemable(token)
  }

  private registerEventListeners() {
    this.controllerContract.on('Minted', async (account, base, quote) => {
      this.mintSubject.next({account, base, quote});
    });
    this.controllerContract.on('Redeemed', async (account, base, quote) => {
      this.redeemSubject.next({account, base, quote});
    });

    this.uxdContract.on('Approval', async (account, spender, amount) => {
      this.uxdApprovalSubject.next({account, spender, amount});
    });

    this.uxdContract.on('Transfer', async (from, to, amount) => {
      this.uxdTransferSubject.next({from, to, amount});
    });
  }
}
