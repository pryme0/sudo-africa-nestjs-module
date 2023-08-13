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
exports.SudoAfricaAccountService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
let SudoAfricaAccountService = class SudoAfricaAccountService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    async createAccount(payload) {
        try {
            const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.post(`/accounts`, payload));
            return data;
        }
        catch (error) {
            throw {
                statusCode: error.status,
                message: error.response.data.message[0].constraints.isIn,
            };
        }
    }
    async getAccounts(payload) {
        try {
            const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.get(`/accounts?page=${payload.page}&limit=${payload.limit}`));
            return data;
        }
        catch (error) {
            throw {
                statusCode: error.status,
                message: error.response.data.message[0].constraints.isIn,
            };
        }
    }
    async getAccount(payload) {
        try {
            const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.get(`/accounts/${payload.id}`));
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
    async getAccountBalance(payload) {
        try {
            const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.get(`/accounts/${payload.id}/balance`));
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
    async getAccountTransactions(payload) {
        try {
            const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.get(`/accounts/${payload.id}/transactions?page=${payload.page}
          &limit=${payload.limit}&fromDate=${payload.fromDate}&toDate=${payload.toDate}`));
            return data;
        }
        catch (error) {
            throw {
                statusCode: error.status,
                message: error.response.data.message[0].constraints.isIn,
            };
        }
    }
    async getBankList(payload) {
        try {
            const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.get(`/accounts/banks?country=${payload.country}`));
            return data;
        }
        catch (error) {
            throw {
                statusCode: error.status,
                message: error.response.data.message[0].constraints.isIn,
            };
        }
    }
    async nameEnquiry(payload) {
        try {
            const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.post(`/accounts/transfer/name-enquiry`, payload));
            return data;
        }
        catch (error) {
            throw {
                statusCode: error.status,
                message: error.response.data.message[0].constraints.isIn,
            };
        }
    }
    async fundTransfer(payload) {
        var _a, _b, _c;
        try {
            const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.post(`/accounts/transfer`, payload));
            return data;
        }
        catch (error) {
            throw {
                statusCode: error === null || error === void 0 ? void 0 : error.status,
                message: (_c = (_b = (_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message[0].constraints) === null || _c === void 0 ? void 0 : _c.isIn,
            };
        }
    }
    async getTransferStatus(payload) {
        try {
            const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.get(`/accounts/transfers/${payload.transferId}`));
            return data;
        }
        catch (error) {
            throw {
                statusCode: error.status,
                message: error.response.data.message[0].constraints.isIn ||
                    error.response.data.message,
            };
        }
    }
    async transferRate(payload) {
        try {
            const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.get(`/accounts/transfer/rate/${payload.currencyPair}`));
            return data;
        }
        catch (error) {
            throw {
                statusCode: error.status,
                message: error.response.data.message[0].constraints.isIn,
            };
        }
    }
};
SudoAfricaAccountService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], SudoAfricaAccountService);
exports.SudoAfricaAccountService = SudoAfricaAccountService;
//# sourceMappingURL=sudo_africa_account.service.js.map