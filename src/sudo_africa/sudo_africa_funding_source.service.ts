import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { FindCardInterface } from './interfaces';
import { Sudo_AFRICA_BASE_URL } from './constants';
import { firstValueFrom } from 'rxjs';

import {
  CreateFundingSourceInterface,
  UpdateCardFundingSourceInterface,
} from './interfaces';

@Injectable()
export class SudoAfricaFundingSourceService {
  constructor(private readonly httpService: HttpService) {}

  async getFundingSources(): Promise<any> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.get(`${Sudo_AFRICA_BASE_URL}/fundingsources`),
      );

      return data;
    } catch (error) {
      throw {
        statusCode: error.status,
        message: error.response.data.message[0].constraints.isIn,
      };
    }
  }

  async getFundingSource(payload: FindCardInterface): Promise<any> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.get(
          `${Sudo_AFRICA_BASE_URL}/fundingsources/${payload.id}`,
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

  async createFundingSource(
    payload: CreateFundingSourceInterface,
  ): Promise<any> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.post(
          `${Sudo_AFRICA_BASE_URL}/fundingsources`,
          payload,
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

  async updateCardFundingSource(
    payload: UpdateCardFundingSourceInterface,
  ): Promise<any> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.put(
          `${Sudo_AFRICA_BASE_URL}/fundingsources/${payload.id}`,
          payload.data,
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
