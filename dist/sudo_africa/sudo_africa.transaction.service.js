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
exports.SudoAfricaTransactionService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const constants_1 = require("./constants");
const rxjs_1 = require("rxjs");
let SudoAfricaTransactionService = class SudoAfricaTransactionService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    async getTransactions(payload) {
        try {
            const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.get(`${constants_1.Sudo_AFRICA_BASE_URL}/cards/transactions?page=${payload === null || payload === void 0 ? void 0 : payload.page}
          &limit=${payload === null || payload === void 0 ? void 0 : payload.limit}&fromDate=${payload === null || payload === void 0 ? void 0 : payload.fromDate}&toDate=${payload === null || payload === void 0 ? void 0 : payload.toDate}`));
            return data;
        }
        catch (error) {
            throw {
                statusCode: error.status,
                message: error.response.data.message[0].constraints.isIn,
            };
        }
    }
    async getCardTransactions(payload) {
        try {
            const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.get(`${constants_1.Sudo_AFRICA_BASE_URL}/cards/${payload.id}/transactions`));
            return data;
        }
        catch (error) {
            throw {
                statusCode: error.status,
                message: error.response.data.message[0].constraints.isIn,
            };
        }
    }
    async getTransaction(payload) {
        try {
            const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.get(`${constants_1.Sudo_AFRICA_BASE_URL}/cards/transactions/${payload.id}`));
            return data;
        }
        catch (error) {
            throw {
                statusCode: error.status,
                message: error.response.data.message[0].constraints.isIn,
            };
        }
    }
    async updateCardTransaction(payload) {
        try {
            const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.put(`${constants_1.Sudo_AFRICA_BASE_URL}/cards/transaction/${payload.id}`, payload.metadata));
            return data;
        }
        catch (error) {
            console.log({ error: error.response.data });
            throw {
                statusCode: error.status,
                message: error.response.data.message[0].constraints.isIn,
            };
        }
    }
};
SudoAfricaTransactionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], SudoAfricaTransactionService);
exports.SudoAfricaTransactionService = SudoAfricaTransactionService;
//# sourceMappingURL=sudo_africa.transaction.service.js.map