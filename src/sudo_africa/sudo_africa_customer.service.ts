import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import {
  CreateIndividualCustomerInterface,
  CreateCompanyCustomerInterface,
  BaseQueryInterface,
  FindCustomerInterface,
  UpdateCustomerPayloadInterface,
} from './interfaces';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class SudoAfricaService {
  constructor(private readonly httpService: HttpService) {}

  async createIndividualCustomer(
    payload: CreateIndividualCustomerInterface,
  ): Promise<any> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.post(`/customers`, payload),
      );
      return data;
    } catch (error) {
      throw error;
    }
  }

  async createCompanyCustomer(
    payload: CreateCompanyCustomerInterface,
  ): Promise<any> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.post(`/customers`, payload),
      );

      return data;
    } catch (error) {
      throw error;
    }
  }

  async getCustomers(payload: BaseQueryInterface): Promise<any> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.get(
          `/customers?page=${payload.page}&limit=${payload.limit}`,
        ),
      );

      return data;
    } catch (error) {
      throw error;
    }
  }

  async getCustomer(payload: FindCustomerInterface): Promise<any> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.get(`/customers/${payload.id}`),
      );

      return data;
    } catch (error) {
      throw error;
    }
  }

  async updateCustomer(payload: UpdateCustomerPayloadInterface): Promise<any> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.put(
          `/customers/${payload.id}`,
          payload.data,
        ),
      );

      return data;
    } catch (error) {
      throw error;
    }
  }
}
