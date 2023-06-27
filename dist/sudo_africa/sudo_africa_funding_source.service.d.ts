import { HttpService } from '@nestjs/axios';
import { FindCardInterface } from './interfaces';
import { CreateFundingSourceInterface, UpdateCardFundingSourceInterface } from './interfaces';
export declare class SudoAfricaFundingSourceService {
    private readonly httpService;
    constructor(httpService: HttpService);
    getFundingSources(): Promise<any>;
    getFundingSource(payload: FindCardInterface): Promise<any>;
    createFundingSource(payload: CreateFundingSourceInterface): Promise<any>;
    updateCardFundingSource(payload: UpdateCardFundingSourceInterface): Promise<any>;
}
