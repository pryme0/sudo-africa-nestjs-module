import { HttpService } from '@nestjs/axios';
import { FindCardInterface, BaseQueryInterface } from './interfaces';
import { UpdateCardTransactionInterface } from './interfaces/card_transaction.interface';
export declare class SudoAfricaTransactionService {
    private readonly httpService;
    constructor(httpService: HttpService);
    getTransactions(payload: BaseQueryInterface): Promise<any>;
    getCardTransactions(payload: FindCardInterface): Promise<any>;
    getTransaction(payload: FindCardInterface): Promise<any>;
    updateCardTransaction(payload: UpdateCardTransactionInterface): Promise<any>;
}
