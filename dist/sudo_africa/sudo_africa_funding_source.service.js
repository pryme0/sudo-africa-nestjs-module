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
exports.SudoAfricaFundingSourceService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
let SudoAfricaFundingSourceService = class SudoAfricaFundingSourceService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    async getFundingSources() {
        try {
            const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.get(`/fundingsources`));
            return data;
        }
        catch (error) {
            throw {
                statusCode: error.status,
                message: error.response.data.message[0].constraints.isIn,
            };
        }
    }
    async getFundingSource(payload) {
        try {
            const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.get(`/fundingsources/${payload.id}`));
            return data;
        }
        catch (error) {
            throw {
                statusCode: error.status,
                message: error.response.data.message[0].constraints.isIn,
            };
        }
    }
    async createFundingSource(payload) {
        try {
            const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.post(`/fundingsources`, payload));
            return data;
        }
        catch (error) {
            throw {
                statusCode: error.status,
                message: error.response.data.message[0].constraints.isIn,
            };
        }
    }
    async updateCardFundingSource(payload) {
        try {
            const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.put(`/fundingsources/${payload.id}`, payload.data));
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
SudoAfricaFundingSourceService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], SudoAfricaFundingSourceService);
exports.SudoAfricaFundingSourceService = SudoAfricaFundingSourceService;
//# sourceMappingURL=sudo_africa_funding_source.service.js.map