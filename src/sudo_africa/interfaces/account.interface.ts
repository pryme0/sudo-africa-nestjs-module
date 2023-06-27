import { CardCurrencyEnum } from './cards.interface';
import { BaseQueryInterface } from './query.interface';

export enum AccountTypeEnumInterface {
  'account' = 'account',

  'wallet' = 'wallet',
}

export interface CreateAccountInterface {
  type: AccountTypeEnumInterface;

  currency: CardCurrencyEnum;

  accountType: string;

  customerId;
}

export interface GetAccountsInterface extends BaseQueryInterface {
  type: AccountTypeEnumInterface;

  currency: CardCurrencyEnum;
}

export interface GetAccountTransactionsInterface extends BaseQueryInterface {
  id: string;
}

export enum GetBankCountrylistInterface {
  NG = 'NG',
}

export interface GetBankListInterface {
  country: GetBankCountrylistInterface;
}

export interface BankEnquiryInterface {
  bankCode: string;

  accountNumber: string;
}

export interface GetTransferStatusInterface {
  transferId: string;
}

export interface FundTransferInterface {
  debitAccountId: string;

  creditAccountId: string;

  beneficiaryBankCode?: string;

  beneficiaryAccountNumber?: string;

  amount: number;

  narration: string;

  paymentReference?: string;
}

export enum CurrencyPairInterface {
  'USDNGN' = 'USDNGN',
}

export interface GetTransferRateInterface {
  currencyPair: CurrencyPairInterface;
}
