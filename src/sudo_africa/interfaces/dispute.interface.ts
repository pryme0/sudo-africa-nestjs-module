import { TransactionMetadataInterface } from './card_transaction.interface';

export interface CreateCardDisputeInterface {
  transactionId: string;

  reason: string;

  explanation: string;

  metadata: TransactionMetadataInterface;
}

export interface UpdateCardDisputeDataInterface {
  reason: string;

  explanation: string;

  metadata?: TransactionMetadataInterface;
}

export interface UpdateCardDisputeInterface {
  id: string;

  data: UpdateCardDisputeDataInterface;
}
