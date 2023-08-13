import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { FindCardInterface } from './interfaces';
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
        this.httpService.get(`/fundingsources`),
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
          `/fundingsources/${payload.id}`,
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
          `/fundingsources`,
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
          `/fundingsources/${payload.id}`,
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
