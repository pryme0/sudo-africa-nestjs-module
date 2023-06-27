import { HttpService } from '@nestjs/axios';
import { CreateIndividualCustomerInterface, CreateCompanyCustomerInterface, BaseQueryInterface, FindCustomerInterface, UpdateCustomerPayloadInterface } from './interfaces';
export declare class SudoAfricaService {
    private readonly httpService;
    constructor(httpService: HttpService);
    createIndividualCustomer(payload: CreateIndividualCustomerInterface): Promise<any>;
    createCompanyCustomer(payload: CreateCompanyCustomerInterface): Promise<any>;
    getCustomers(payload: BaseQueryInterface): Promise<any>;
    getCustomer(payload: FindCustomerInterface): Promise<any>;
    updateCustomer(payload: UpdateCustomerPayloadInterface): Promise<any>;
}
