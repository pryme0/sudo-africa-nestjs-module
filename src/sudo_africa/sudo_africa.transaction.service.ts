import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { FindCardInterface, BaseQueryInterface } from './interfaces';
import { firstValueFrom } from 'rxjs';
import { UpdateCardTransactionInterface } from './interfaces/card_transaction.interface';

@Injectable()
export class SudoAfricaTransactionService {
  constructor(private readonly httpService: HttpService) {}

  async getTransactions(payload: BaseQueryInterface): Promise<any> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.get(
          `/cards/transactions?page=${payload?.page}
          &limit=${payload?.limit}&fromDate=${payload?.fromDate}&toDate=${payload?.toDate}`,
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

  async getCardTransactions(payload: FindCardInterface): Promise<any> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.get(
          `/cards/${payload.id}/transactions`,
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

  async getTransaction(payload: FindCardInterface): Promise<any> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.get(
          `/cards/transactions/${payload.id}`,
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

  async updateCardTransaction(
    payload: UpdateCardTransactionInterface,
  ): Promise<any> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.put(
          `/cards/transaction/${payload.id}`,
          payload.metadata,
        ),
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
}
