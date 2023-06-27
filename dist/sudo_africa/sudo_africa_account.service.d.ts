import { HttpService } from '@nestjs/axios';
import { CreateAccountInterface, GetAccountsInterface, GetAccountTransactionsInterface, GetBankListInterface, FundTransferInterface, GetTransferStatusInterface, GetTransferRateInterface, FindCardInterface, BankEnquiryInterface } from './interfaces';
export declare class SudoAfricaAccountService {
    private readonly httpService;
    constructor(httpService: HttpService);
    createAccount(payload: CreateAccountInterface): Promise<any>;
    getAccounts(payload: GetAccountsInterface): Promise<any>;
    getAccount(payload: FindCardInterface): Promise<any>;
    getAccountBalance(payload: FindCardInterface): Promise<any>;
    getAccountTransactions(payload: GetAccountTransactionsInterface): Promise<any>;
    getBankList(payload: GetBankListInterface): Promise<any>;
    nameEnquiry(payload: BankEnquiryInterface): Promise<any>;
    fundTransfer(payload: FundTransferInterface): Promise<any>;
    getTransferStatus(payload: GetTransferStatusInterface): Promise<any>;
    transferRate(payload: GetTransferRateInterface): Promise<any>;
}
