<h1 align="center">nestjs-logspot</h1>

<p align="center">Injectable Logspot wrapper for NestJS</p>

<div align="center">
  <a href="https://nestjs.com" target="_blank">
    <img src="https://img.shields.io/badge/built%20with-NestJs-red.svg" alt="Built with NestJS">
  </a>
</div>

## Getting Started

The simplest way to use `nestjs-logspot` is to use `LogspotModule.forRoot`

```typescript
import { Module } from '@nestjs-common';
import { LogspotModule } from 'nestjs-stripe';

@Module({
  imports: [
    LogspotModule.forRoot({
      // Recommendation: Use env vars to store the secret key
      secretKey: 'sk_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    }),
  ],
})
export class AppModule {}
```

You can then inject Logspot into any of your injectables by using a custom decorator

```typescript
import { Injectable } from '@nestjs/common';
import { InjectLogspot, LogspotService } from 'nestjs-stripe';

@Injectable()
export class AppService {
  constructor(@InjectLogspot() private readonly logspotService: LogspotService) {}
}
```

After you injected Logspot, you can use the track function to send events.

```typescript
import { Injectable } from '@nestjs/common';
import { InjectLogspot, LogspotService } from 'nestjs-stripe';

@Injectable()
export class AppService {
  constructor(@InjectLogspot() private readonly logspotService: LogspotService) {}

  sendEvent(account) {
    this.logspotService.track({
      event: 'account.created',
      userId: account.id,
      metadata: { email: account.email },
    });
   }
}
```
## License

Licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
