import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { FindCardInterface, BaseQueryInterface } from './interfaces';
import { Sudo_AFRICA_BASE_URL } from './constants';
import { firstValueFrom } from 'rxjs';
import { UpdateCardTransactionInterface } from './interfaces/card_transaction.interface';

@Injectable()
export class SudoAfricaAuthorizationService {
  constructor(private readonly httpService: HttpService) {}

  async getAuthorizations(payload: BaseQueryInterface): Promise<any> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.get(
          `${Sudo_AFRICA_BASE_URL}/cards/authorizations?page=${payload?.page}
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

  async getCardAuthorizations(payload: FindCardInterface): Promise<any> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.get(
          `${Sudo_AFRICA_BASE_URL}/cards/${payload.id}/authorizations`,
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

  async getAuthorization(payload: FindCardInterface): Promise<any> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.get(
          `${Sudo_AFRICA_BASE_URL}/cards/authorizations/${payload.id}`,
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

  async updateCardAuthorization(
    payload: UpdateCardTransactionInterface,
  ): Promise<any> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.put(
          `${Sudo_AFRICA_BASE_URL}/cards/authorization/${payload.id}`,
          payload.metadata,
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
}
