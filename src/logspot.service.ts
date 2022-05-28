import Logspot from '@logspot/node';
import { Provider } from '@nestjs/common';
import { LOGSPOT_PROVIDER } from './logspot.constants';
import { LogspotConfig } from './logspot.interfaces';

export function createLogspotProvider(
  config: LogspotConfig,
): Provider<{ track: typeof Logspot.track }> {
  Logspot.init(config);
  return {
    provide: LOGSPOT_PROVIDER,
    useValue: { track: Logspot.track },
  };
}

export type LogspotService = {
  track: typeof Logspot.track;
};
