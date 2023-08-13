import { DynamicModule } from '@nestjs/common';
import { ENVIRONMENT } from './constants';
export declare class SudAfricaModule {
    static register(api_key: string, environment: ENVIRONMENT): DynamicModule;
}
