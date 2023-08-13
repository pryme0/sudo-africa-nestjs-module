import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import {
  CreateCardInterface,
  ChangeCardPinInterface,
  BaseQueryInterface,
  FindCardInterface,
  UpdateCardInterface,
  OrderCardsInterface,
} from './interfaces';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class SudoAfricaCardsService {
  constructor(private readonly httpService: HttpService) {}

  async createCard(payload: CreateCardInterface): Promise<any> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.post(`/cards`, payload),
      );

      return data;
    } catch (error) {
      throw {
        statusCode: error.status,
        message: error.response.data.message[0].constraints.isIn,
      };
    }
  }

  async getCards(payload: BaseQueryInterface): Promise<any> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.get(
          `/cards?page=${payload.page}&limit=${payload.limit}`,
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

  async getCard(payload: FindCardInterface): Promise<any> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.get(`/cards/${payload.id}`),
      );

      return data;
    } catch (error) {
      throw {
        statusCode: error.status,
        message: error.response.data.message[0].constraints.isIn,
      };
    }
  }

  async getCustomerCards(payload: FindCardInterface): Promise<any> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.get(
          `/cards/customer/${payload.id}`,
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

  async updateCard(payload: UpdateCardInterface): Promise<any> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.put(
          `/cards/${payload.id}`,
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

  async sendDefaultCardPin(payload: FindCardInterface): Promise<any> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.put(
          `/cards/${payload.id}/send-pin`,
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

  async changeCardPin(payload: ChangeCardPinInterface): Promise<any> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.put(
          `/cards/${payload.id}/pin`,
          payload.pins,
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

  async enrolCardFor2Fa(payload: FindCardInterface): Promise<any> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.put(
          `/cards/${payload.id}/enroll2fa`,
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

  async generateCardToken(payload: FindCardInterface): Promise<any> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.get(
          `/cards/${payload.id}/token`,
        ),
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

  async orderCards(payload: OrderCardsInterface): Promise<any> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.put(`/cards/order`, payload),
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
