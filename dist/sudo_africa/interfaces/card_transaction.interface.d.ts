export interface TransactionMetadataInterface {
    [name: string]: string;
}
export interface UpdateCardTransactionInterface {
    id: string;
    metadata: TransactionMetadataInterface;
}
