export enum CustomerTypeEnum {
  'individual' = 'individual',
  'company' = 'company',
}

export enum CustomerStatusEnum {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}

export interface CustomerIdentity {
  type: string;

  number: string;
}

export interface BillingAddress {
  line1: string;

  line2?: string;

  city: string;

  state: string;

  postalCode: string;

  country: string;
}

export interface CustomerDocuments {
  idFrontUrl: string;

  idBackUrl: string;

  incorporationCertificateUrl: string;

  addressVerificationUrl: string;
}

export interface IndividualCustomer {
  firstName: string;

  lastName: string;

  otherNames: string;

  dob: string;

  identity: CustomerIdentity;

  documents: CustomerDocuments;
}

export interface CompanyCustomer {
  name: string;

  dob: string;

  identity: CustomerIdentity;

  documents: CustomerDocuments;

  officer: IndividualCustomer;
}

export interface CreateIndividualCustomerInterface {
  type: CustomerTypeEnum;

  name: string;

  phoneNumber: string;

  emailAddress: string;

  status: CustomerStatusEnum;

  individual: IndividualCustomer;

  billingAddress: BillingAddress;
}

export interface CreateCompanyCustomerInterface {
  type: CustomerTypeEnum;

  name: string;

  phoneNumber: string;

  emailAddress: string;

  status: CustomerStatusEnum;

  company: CompanyCustomer;

  billingAddress: BillingAddress;
}

export interface UpdateCustomerDataInterface {
  type?: CustomerTypeEnum;

  name?: string;

  phoneNumber?: string;

  emailAddress?: string;

  status?: CustomerStatusEnum;

  company?: CompanyCustomer;

  individual?: IndividualCustomer;

  billingAddress?: BillingAddress;
}

export interface UpdateCustomerPayloadInterface {
  id: string;

  data: UpdateCustomerDataInterface;
}

export interface Customer {
  _id?: string;

  type?: CustomerTypeEnum;

  name?: string;

  business?: string;

  phoneNumber?: string;

  emailAddress?: string;

  status?: CustomerStatusEnum;

  individual?: IndividualCustomer;

  company?: CompanyCustomer;

  billingAddress?: BillingAddress;

  createdAt?: string;

  updatedAt?: string;
}
