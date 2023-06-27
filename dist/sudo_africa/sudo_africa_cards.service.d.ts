import { HttpService } from '@nestjs/axios';
import { CreateCardInterface, ChangeCardPinInterface, BaseQueryInterface, FindCardInterface, UpdateCardInterface, OrderCardsInterface } from './interfaces';
export declare class SudoAfricaCardsService {
    private readonly httpService;
    constructor(httpService: HttpService);
    createCard(payload: CreateCardInterface): Promise<any>;
    getCards(payload: BaseQueryInterface): Promise<any>;
    getCard(payload: FindCardInterface): Promise<any>;
    getCustomerCards(payload: FindCardInterface): Promise<any>;
    updateCard(payload: UpdateCardInterface): Promise<any>;
    sendDefaultCardPin(payload: FindCardInterface): Promise<any>;
    changeCardPin(payload: ChangeCardPinInterface): Promise<any>;
    enrolCardFor2Fa(payload: FindCardInterface): Promise<any>;
    generateCardToken(payload: FindCardInterface): Promise<any>;
    orderCards(payload: OrderCardsInterface): Promise<any>;
}
