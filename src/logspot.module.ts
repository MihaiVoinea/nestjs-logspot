import { DynamicModule, Module } from '@nestjs/common';
import { LogspotCoreModule } from './logspot.core-module';
import { LogspotConfig } from './logspot.interfaces';

@Module({})
export class LogspotModule {
  static forRoot(config?: LogspotConfig): DynamicModule {
    return LogspotCoreModule.forRoot(config);
  }
}
