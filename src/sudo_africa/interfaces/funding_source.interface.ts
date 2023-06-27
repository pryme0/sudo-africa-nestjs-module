import { CustomerStatusEnum } from './customer.interface';

export enum FundingSourceTypeEnum {
  'default' = 'default',

  'account' = 'account',

  'gateway' = 'gateway',
}

export interface FundingSourceJitGateway {
  url: string;

  authorizationHeader: string;

  authorizeByDefault: string;
}

export interface CreateFundingSourceInterface {
  type: FundingSourceTypeEnum;

  status: CustomerStatusEnum;

  jitGateway: FundingSourceJitGateway;
}

export class FundingSourceInterface {
  _id: string;

  business: string;

  type: FundingSourceTypeEnum;

  status: CustomerStatusEnum;

  jitGateway?: FundingSourceJitGateway;

  isDefault: boolean;

  isDeleted: boolean;

  createdAt: string;

  updatedAt: string;
}

export interface UpdateCardFundingSourceData {
  status: CustomerStatusEnum;

  jitGateway?: FundingSourceJitGateway;
}

export interface UpdateCardFundingSourceInterface {
  id: string;

  data?: UpdateCardFundingSourceData;
}
