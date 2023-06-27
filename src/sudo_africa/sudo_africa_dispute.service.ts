import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { FindCardInterface, BaseQueryInterface } from './interfaces';
import { Sudo_AFRICA_BASE_URL } from './constants';
import { firstValueFrom } from 'rxjs';
import {
  CreateCardDisputeInterface,
  UpdateCardDisputeInterface,
} from './interfaces/dispute.interface';

@Injectable()
export class SudoAfricaDisputeService {
  constructor(private readonly httpService: HttpService) {}

  async getDisputes(payload: BaseQueryInterface): Promise<any> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.get(
          `${Sudo_AFRICA_BASE_URL}/cards/disputes?page=${payload?.page}
          &limit=${payload?.limit}`,
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

  async getDispute(payload: FindCardInterface): Promise<any> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.get(
          `${Sudo_AFRICA_BASE_URL}/cards/disputes/${payload.id}`,
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

  async createDispute(payload: CreateCardDisputeInterface): Promise<any> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.post(
          `${Sudo_AFRICA_BASE_URL}/cards/disputes`,
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

  async updateCardDispute(payload: UpdateCardDisputeInterface): Promise<any> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.put(
          `${Sudo_AFRICA_BASE_URL}/cards/disputes/${payload.id}`,
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
