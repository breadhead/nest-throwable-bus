# Nest Throwable Bus

In the [CQRS module for Nest Framework](https://github.com/nestjs/cqrs) we found one minor problem. Exceptions from the handler aren't thrown into the calling code. In the original repository a [solution](https://github.com/nestjs/cqrs/issues/3) was proposed that it would severely pollute the code. Our solution allows to continue working with the module as before, but with improved exception handling.

## Instalation

`yarn add @breadhead/nest-throwable-bus`

## Usage

Just replace:
+ `import { CommandHandler } from '@nestjs/cqrs'` to `import { CommandHandler } from '@breadhead/nest-throwable-bus'`
+ `import { CommandBus } from '@nestjs/cqrs'` to `import { CommandBus } from '@breadhead/nest-throwable-bus'`

All done!
