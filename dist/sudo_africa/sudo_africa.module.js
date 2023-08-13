"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var SudAfricaModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SudAfricaModule = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const sudo_africa_customer_service_1 = require("./sudo_africa_customer.service");
const sudo_africa_cards_service_1 = require("./sudo_africa_cards.service");
const sudo_africa_account_service_1 = require("./sudo_africa_account.service");
const sudo_africa_transaction_service_1 = require("./sudo_africa.transaction.service");
const sudo_africa_dispute_service_1 = require("./sudo_africa_dispute.service");
const sudo_africa_funding_source_service_1 = require("./sudo_africa_funding_source.service");
const sudo_africa_authorization_service_1 = require("./sudo_africa_authorization.service");
const constants_1 = require("./constants");
let SudAfricaModule = SudAfricaModule_1 = class SudAfricaModule {
    static register(api_key, environment) {
        return {
            module: SudAfricaModule_1,
            imports: [
                axios_1.HttpModule.registerAsync({
                    useFactory: () => {
                        return {
                            headers: {
                                Authorization: `Bearer ${api_key}`,
                            },
                            baseURL: environment === 'production'
                                ? constants_1.SUDO_AFRICA_LIVE_URL
                                : constants_1.Sudo_AFRICA_SANDBOX_URL,
                        };
                    },
                }),
            ],
            providers: [
                sudo_africa_customer_service_1.SudoAfricaService,
                sudo_africa_cards_service_1.SudoAfricaCardsService,
                sudo_africa_account_service_1.SudoAfricaAccountService,
                sudo_africa_transaction_service_1.SudoAfricaTransactionService,
                sudo_africa_authorization_service_1.SudoAfricaAuthorizationService,
                sudo_africa_funding_source_service_1.SudoAfricaFundingSourceService,
                sudo_africa_dispute_service_1.SudoAfricaDisputeService,
            ],
            exports: [
                sudo_africa_customer_service_1.SudoAfricaService,
                sudo_africa_cards_service_1.SudoAfricaCardsService,
                sudo_africa_account_service_1.SudoAfricaAccountService,
                sudo_africa_transaction_service_1.SudoAfricaTransactionService,
                sudo_africa_authorization_service_1.SudoAfricaAuthorizationService,
                sudo_africa_funding_source_service_1.SudoAfricaFundingSourceService,
                sudo_africa_dispute_service_1.SudoAfricaDisputeService,
            ],
        };
    }
};
SudAfricaModule = SudAfricaModule_1 = __decorate([
    (0, common_1.Injectable)()
], SudAfricaModule);
exports.SudAfricaModule = SudAfricaModule;
//# sourceMappingURL=sudo_africa.module.js.map