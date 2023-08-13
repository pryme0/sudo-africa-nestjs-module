import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import {
  CreateAccountInterface,
  GetAccountsInterface,
  GetAccountTransactionsInterface,
  GetBankListInterface,
  FundTransferInterface,
  GetTransferStatusInterface,
  GetTransferRateInterface,
  FindCardInterface,
  BankEnquiryInterface,
} from './interfaces';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class SudoAfricaAccountService {
  constructor(private readonly httpService: HttpService) {}

  async createAccount(payload: CreateAccountInterface): Promise<any> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.post(`/accounts`, payload),
      );

      return data;
    } catch (error) {
      throw {
        statusCode: error.status,
        message: error.response.data.message[0].constraints.isIn,
      };
    }
  }

  async getAccounts(payload: GetAccountsInterface): Promise<any> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.get(
          `/accounts?page=${payload.page}&limit=${payload.limit}`,
        ),
      );

      return data;
    } catch (error) {
      throw {
        statusCode: error.status,
        message: error.response.data.message[0].constraints.isIn,
      };
    }
  }

  async getAccount(payload: FindCardInterface): Promise<any> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.get(`/accounts/${payload.id}`),
      );

      return data;
    } catch (error) {
      console.log({ error: error.response.data });

      throw {
        statusCode: error.status,
        message: error.response.data.message[0].constraints.isIn,
      };
    }
  }

  async getAccountBalance(payload: FindCardInterface): Promise<any> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.get(`/accounts/${payload.id}/balance`),
      );

      return data;
    } catch (error) {
      console.log({ error: error.response.data });
      throw {
        statusCode: error.status,
        message: error.response.data.message[0].constraints.isIn,
      };
    }
  }

  async getAccountTransactions(
    payload: GetAccountTransactionsInterface,
  ): Promise<any> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.get(
          `/accounts/${payload.id}/transactions?page=${payload.page}
          &limit=${payload.limit}&fromDate=${payload.fromDate}&toDate=${payload.toDate}`,
        ),
      );

      return data;
    } catch (error) {
      throw {
        statusCode: error.status,
        message: error.response.data.message[0].constraints.isIn,
      };
    }
  }

  async getBankList(payload: GetBankListInterface): Promise<any> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.get(`/accounts/banks?country=${payload.country}`),
      );

      return data;
    } catch (error) {
      throw {
        statusCode: error.status,
        message: error.response.data.message[0].constraints.isIn,
      };
    }
  }

  async nameEnquiry(payload: BankEnquiryInterface): Promise<any> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.post(`/accounts/transfer/name-enquiry`, payload),
      );

      return data;
    } catch (error) {
      throw {
        statusCode: error.status,
        message: error.response.data.message[0].constraints.isIn,
      };
    }
  }

  async fundTransfer(payload: FundTransferInterface): Promise<any> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.post(`/accounts/transfer`, payload),
      );

      return data;
    } catch (error) {
      throw {
        statusCode: error?.status,
        message: error?.response?.data?.message[0].constraints?.isIn,
      };
    }
  }

  async getTransferStatus(payload: GetTransferStatusInterface): Promise<any> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.get(`/accounts/transfers/${payload.transferId}`),
      );

      return data;
    } catch (error) {
      throw {
        statusCode: error.status,
        message:
          error.response.data.message[0].constraints.isIn ||
          error.response.data.message,
      };
    }
  }

  async transferRate(payload: GetTransferRateInterface): Promise<any> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.get(`/accounts/transfer/rate/${payload.currencyPair}`),
      );

      return data;
    } catch (error) {
      throw {
        statusCode: error.status,
        message: error.response.data.message[0].constraints.isIn,
      };
    }
  }
}
