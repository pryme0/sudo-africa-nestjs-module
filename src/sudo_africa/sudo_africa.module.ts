import { DynamicModule, Injectable } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { SudoAfricaService } from './sudo_africa_customer.service';
import { SudoAfricaCardsService } from './sudo_africa_cards.service';
import { SudoAfricaAccountService } from './sudo_africa_account.service';

import { SudoAfricaTransactionService } from './sudo_africa.transaction.service';
import { SudoAfricaDisputeService } from './sudo_africa_dispute.service';
import { SudoAfricaFundingSourceService } from './sudo_africa_funding_source.service';
import { SudoAfricaAuthorizationService } from './sudo_africa_authorization.service';

@Injectable()
export class SudAfricaModule {
  static register(SUDO_API_KEY: string): DynamicModule {
    return {
      module: SudAfricaModule,
      imports: [
        HttpModule.registerAsync({
          useFactory: () => {
            return {
              headers: {
                Authorization: `Bearer ${SUDO_API_KEY}`,
              },
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
