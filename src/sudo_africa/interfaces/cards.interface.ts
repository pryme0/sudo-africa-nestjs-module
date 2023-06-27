import {
  BillingAddress,
  Customer,
  CustomerStatusEnum,
} from './customer.interface';

export enum CardDesignEnum {
  SudoBlack = 'SudoBlack',

  SudoWhite = 'SudoWhite',
}

export enum CardShippingMethodEnum {
  NIPOST = 'NIPOST',

  DHL = 'DHL',
}

export enum CardCurrencyEnum {
  NGN = 'NGN',

  USD = 'USD',
}

export interface FindCardInterface {
  id: string;
}

export interface CardPins {
  oldPin: string;

  newPin: string;
}

export interface ChangeCardPinInterface {
  id?: string;

  pins: CardPins;
}

export enum CardIssuerCountryEnum {
  NGA = 'NGA',

  USA = 'USA',
}

export enum CardTypeEnum {
  physical = 'physical',

  virtual = 'virtual',
}

export enum CardBrandEnum {
  Verve = 'Verve',

  Visa = 'Visa',

  MasterCard = 'MasterCard',
}

export interface CardAccount {
  _id?: string;

  business?: string;

  type?: string;

  currency?: string;

  accountName?: string;

  bankCode?: string;

  accountType?: string;

  accountNumber?: number;

  currentBalance?: number;

  availableBalance?: number;

  provider?: string;

  providerReference?: string;

  referenceCode?: string;

  isDefault?: boolean;
}

export interface CardFundingSource {
  _id?: string;

  business?: string;

  type?: string;

  status?: string;

  jitGateway?: string;

  isDefault: boolean;
}

export interface CardChannels {
  atm?: boolean;

  pos?: boolean;

  web?: boolean;

  mobile: boolean;

  _id?: string;
}

export interface SpendingLimit {
  amount: number;

  interval: string;

  categories: string[];

  _id: string;
}

export interface SpendingControls {
  channels?: CardChannels;

  allowedCategories: string[];

  blockedCategories: string[];

  spendingLimits: SpendingLimit[];

  _id: string;
}

export interface Card {
  _id: string;

  type?: string;

  brand?: string;

  currency?: string;

  maskedPan?: string;

  expiryMonth?: string;

  expiryYear?: string;

  status?: string;

  business?: string;

  customer?: Customer;

  spendingControls?: SpendingControls;

  account?: CardAccount;

  fundingSource?: CardFundingSource;
}

export interface CreateCardInterface {
  customerId: string;

  fundingSourceId: string;

  type: CardTypeEnum;

  brand: CardBrandEnum;

  number?: string;

  issuerCountry: CardIssuerCountryEnum;

  currency: CardCurrencyEnum;

  status: CustomerStatusEnum;

  spendingControls: SpendingControls;

  bankCode?: string;

  accountNumber?: string;

  replacementFor?: string;

  replacementReason?: string;

  debitAccountId?: string;

  amount?: number; //funding amount required for mastercard

  sendPINSMS?: boolean; //send default pin to customer phone number

  expirationDate?: string; //Expiration date for visa cards
}

export interface UpdateCardPayload {
  fundingSourceId: string;

  status: CustomerStatusEnum;

  spendingControls: SpendingControls;

  cancelationReason?: string;

  creditAccountId?: string;
}

export interface UpdateCardInterface {
  id: string;

  data: UpdateCardPayload;
}

export interface OrderCardsInterface {
  customerId: string;

  expedite?: boolean;

  brand: CardBrandEnum;

  currency: CardCurrencyEnum;

  nameOnCards: string[];

  design: CardDesignEnum;

  debitAccountId?: string;

  shippingMethod?: CardShippingMethodEnum;

  shippingAddress?: BillingAddress;
}
