import { DynamicModule, Global, Module } from '@nestjs/common';
import { LogspotConfig } from './logspot.interfaces';
import { createLogspotProvider } from './logspot.service';

@Global()
@Module({})
export class LogspotCoreModule {
  public static forRoot(config: LogspotConfig): DynamicModule {
    const provider = createLogspotProvider(config);

    return {
      exports: [provider],
      module: LogspotCoreModule,
      providers: [provider],
    };
  }
}
