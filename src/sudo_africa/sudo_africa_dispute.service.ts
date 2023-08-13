import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { FindCardInterface, BaseQueryInterface } from './interfaces';
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
          `/cards/disputes?page=${payload?.page}
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
          `/cards/disputes/${payload.id}`,
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
          `/cards/disputes`,
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
          `/cards/disputes/${payload.id}`,
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
