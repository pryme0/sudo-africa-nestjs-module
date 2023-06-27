export interface BaseQueryInterface {
  page: string;

  limit: string;

  fromDate?: string;

  toDate?: string;
}

export interface FindCustomerInterface {
  id: string;
}
