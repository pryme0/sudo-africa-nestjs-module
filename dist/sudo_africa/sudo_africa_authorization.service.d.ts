import { HttpService } from '@nestjs/axios';
import { FindCardInterface, BaseQueryInterface } from './interfaces';
import { UpdateCardTransactionInterface } from './interfaces/card_transaction.interface';
export declare class SudoAfricaAuthorizationService {
    private readonly httpService;
    constructor(httpService: HttpService);
    getAuthorizations(payload: BaseQueryInterface): Promise<any>;
    getCardAuthorizations(payload: FindCardInterface): Promise<any>;
    getAuthorization(payload: FindCardInterface): Promise<any>;
    updateCardAuthorization(payload: UpdateCardTransactionInterface): Promise<any>;
}
