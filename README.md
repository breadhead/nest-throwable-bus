# Nest Throwable Bus

In the [CQRS nodule for Nest Framework](https://github.com/nestjs/cqrs), we found one minor problem. Exceptions from the handler are not thrown into the calling code. In the original repository, a [solution](https://github.com/nestjs/cqrs/issues/3) was proposed that would severely pollute the code. Our solution allows us to continue to work with the module as before, but to get a normal work with errors.

## Instalation

`yarn add @breadhead/nest-throwable-bus`

## Usage

Just replace:

`import { CommandHandler } from '@nestjs/cqrs'` => `import { CommandHandler } from '@breadhead/nest-throwable-bus'`
`import { CommandBus } from '@nestjs/cqrs'` => `import { CommandBus } from '@breadhead/nest-throwable-bus'`

All done!
