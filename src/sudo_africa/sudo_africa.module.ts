import { DynamicModule, Injectable } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { SudoAfricaService } from './sudo_africa_customer.service';
import { SudoAfricaCardsService } from './sudo_africa_cards.service';
import { SudoAfricaAccountService } from './sudo_africa_account.service';

import { SudoAfricaTransactionService } from './sudo_africa.transaction.service';
import { SudoAfricaDisputeService } from './sudo_africa_dispute.service';
import { SudoAfricaFundingSourceService } from './sudo_africa_funding_source.service';
import { SudoAfricaAuthorizationService } from './sudo_africa_authorization.service';
import {
  SUDO_AFRICA_LIVE_URL,
  Sudo_AFRICA_SANDBOX_URL,
  ENVIRONMENT,
} from './constants';

@Injectable()
export class SudAfricaModule {
  static register(api_key: string, environment: ENVIRONMENT): DynamicModule {
    return {
      module: SudAfricaModule,
      imports: [
        HttpModule.registerAsync({
          useFactory: () => {
            return {
              headers: {
                Authorization: `Bearer ${api_key}`,
              },
              baseURL:
                environment === 'production'
                  ? SUDO_AFRICA_LIVE_URL
                  : Sudo_AFRICA_SANDBOX_URL,
            };
          },
        }),
      ],
      providers: [
        SudoAfricaService,
        SudoAfricaCardsService,
        SudoAfricaAccountService,
        SudoAfricaTransactionService,
        SudoAfricaAuthorizationService,
        SudoAfricaFundingSourceService,
        SudoAfricaDisputeService,
      ],
      exports: [
        SudoAfricaService,
        SudoAfricaCardsService,
        SudoAfricaAccountService,
        SudoAfricaTransactionService,
        SudoAfricaAuthorizationService,
        SudoAfricaFundingSourceService,
        SudoAfricaDisputeService,
      ],
    };
  }
}
