import { HttpService } from '@nestjs/axios';
import { FindCardInterface, BaseQueryInterface } from './interfaces';
import { CreateCardDisputeInterface, UpdateCardDisputeInterface } from './interfaces/dispute.interface';
export declare class SudoAfricaDisputeService {
    private readonly httpService;
    constructor(httpService: HttpService);
    getDisputes(payload: BaseQueryInterface): Promise<any>;
    getDispute(payload: FindCardInterface): Promise<any>;
    createDispute(payload: CreateCardDisputeInterface): Promise<any>;
    updateCardDispute(payload: UpdateCardDisputeInterface): Promise<any>;
}
