import { Inject } from '@nestjs/common';
import { LOGSPOT_PROVIDER } from './logspot.constants';

export function InjectLogspot() {
  return Inject(LOGSPOT_PROVIDER);
}
