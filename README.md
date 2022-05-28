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
      secretKey: 'sk_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', // Recommendation: Use env vars to store the secret key
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

## License

Licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
