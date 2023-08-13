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
exports.SudoAfricaCardsService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
let SudoAfricaCardsService = class SudoAfricaCardsService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    async createCard(payload) {
        try {
            const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.post(`/cards`, payload));
            return data;
        }
        catch (error) {
            throw {
                statusCode: error.status,
                message: error.response.data.message[0].constraints.isIn,
            };
        }
    }
    async getCards(payload) {
        try {
            const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.get(`/cards?page=${payload.page}&limit=${payload.limit}`));
            return data;
        }
        catch (error) {
            throw {
                statusCode: error.status,
                message: error.response.data.message[0].constraints.isIn,
            };
        }
    }
    async getCard(payload) {
        try {
            const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.get(`/cards/${payload.id}`));
            return data;
        }
        catch (error) {
            throw {
                statusCode: error.status,
                message: error.response.data.message[0].constraints.isIn,
            };
        }
    }
    async getCustomerCards(payload) {
        try {
            const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.get(`/cards/customer/${payload.id}`));
            return data;
        }
        catch (error) {
            throw {
                statusCode: error.status,
                message: error.response.data.message[0].constraints.isIn,
            };
        }
    }
    async updateCard(payload) {
        try {
            const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.put(`/cards/${payload.id}`, payload.data));
            return data;
        }
        catch (error) {
            throw {
                statusCode: error.status,
                message: error.response.data.message[0].constraints.isIn,
            };
        }
    }
    async sendDefaultCardPin(payload) {
        try {
            const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.put(`/cards/${payload.id}/send-pin`));
            return data;
        }
        catch (error) {
            throw {
                statusCode: error.status,
                message: error.response.data.message[0].constraints.isIn,
            };
        }
    }
    async changeCardPin(payload) {
        try {
            const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.put(`/cards/${payload.id}/pin`, payload.pins));
            return data;
        }
        catch (error) {
            throw {
                statusCode: error.status,
                message: error.response.data.message[0].constraints.isIn,
            };
        }
    }
    async enrolCardFor2Fa(payload) {
        try {
            const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.put(`/cards/${payload.id}/enroll2fa`));
            return data;
        }
        catch (error) {
            throw {
                statusCode: error.status,
                message: error.response.data.message[0].constraints.isIn,
            };
        }
    }
    async generateCardToken(payload) {
        try {
            const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.get(`/cards/${payload.id}/token`));
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
    async orderCards(payload) {
        try {
            const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.put(`/cards/order`, payload));
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
SudoAfricaCardsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], SudoAfricaCardsService);
exports.SudoAfricaCardsService = SudoAfricaCardsService;
//# sourceMappingURL=sudo_africa_cards.service.js.map