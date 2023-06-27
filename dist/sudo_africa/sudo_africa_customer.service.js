"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SudoAfricaService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const constants_1 = require("./constants");
const rxjs_1 = require("rxjs");
let SudoAfricaService = class SudoAfricaService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    async createIndividualCustomer(payload) {
        try {
            const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.post(`${constants_1.Sudo_AFRICA_BASE_URL}/customers`, payload));
            return data;
        }
        catch (error) {
            throw error;
        }
    }
    async createCompanyCustomer(payload) {
        try {
            const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.post(`${constants_1.Sudo_AFRICA_BASE_URL}/customers`, payload));
            return data;
        }
        catch (error) {
            throw error;
        }
    }
    async getCustomers(payload) {
        try {
            const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.get(`${constants_1.Sudo_AFRICA_BASE_URL}/customers?page=${payload.page}&limit=${payload.limit}`));
            return data;
        }
        catch (error) {
            throw error;
        }
    }
    async getCustomer(payload) {
        try {
            const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.get(`${constants_1.Sudo_AFRICA_BASE_URL}/customers/${payload.id}`));
            return data;
        }
        catch (error) {
            throw error;
        }
    }
    async updateCustomer(payload) {
        try {
            const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.put(`${constants_1.Sudo_AFRICA_BASE_URL}/customers/${payload.id}`, payload.data));
            return data;
        }
        catch (error) {
            throw error;
        }
    }
};
SudoAfricaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], SudoAfricaService);
exports.SudoAfricaService = SudoAfricaService;
//# sourceMappingURL=sudo_africa_customer.service.js.map