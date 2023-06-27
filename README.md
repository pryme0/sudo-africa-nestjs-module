
<p  align="center">

<a  href="http://nestjs.com/"  target="blank"><img  src="https://nestjs.com/img/logo-small.svg"  width="200"  alt="Nest Logo"  /></a>

</p>

## Description

[Sudo Africa](https://sudo.africa/) is an open API platform that lets you embed powerful financial features into your product. Build in minutes, launch in days.

You can view their Api [Documentation](https://docs.sudo.africa/docs)  here, and api reference [here](https://docs.sudo.africa/reference/introduction)

To use this package you will need to [create an account](https://app.sudo.africa/signup) with Sudo africa  in order to get an Api key  

This package implements the endpoints for  

- Cards
- Account
- Authorization
- Disputes
- Transactions
- Customers

## Installation

```bash

yarn  add @prymejo/sudo-africa-nestjs-module

```

## Using the package

```bash
import { SudAfricaModule,SudoAfricaCardsService } from '@prymejo/sudo-africa-nestjs-module';

@Module({
imports: [SudAfricaModule.register(SUDO_AFRICA_API_KEY)],
controllers: [],
providers: [SudoAfricaCardsService],
})
export  class  AppModule {}

#Available service

 - SudoAfricaCardsService
 - SudoAfricaAccountService
 - SudoAfricaAuthorizationService
 - SudoAfricaDisputeService
 - SudoAfricaFundingSourceService
 - SudoAfricaTransactionService

```

## Stay in touch

- Author - [Joseph Obochi](https://kamilmysliwiec.com)

- Twitter - [@prymejo](https://twitter.com/prymejo)

## License

@prymejo/sudo-africa-nestjs-module is [MIT licensed](LICENSE).
