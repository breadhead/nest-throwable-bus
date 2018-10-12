import { Injectable } from '@nestjs/common'
import { CommandBus as OriginalCommandBus, ICommand } from '@nestjs/cqrs'

import CommandBusResult from './CommandBusResult'

type Resolved = CommandBusResult | any

@Injectable()
export default class CommandBus extends OriginalCommandBus {
  public async execute(command: ICommand): Promise<any> {
    const resolved: Resolved = await super.execute(command)

    if (!(resolved instanceof CommandBusResult)) {
      return resolved
    }

    if (resolved.error) {
      throw resolved.error
    }

    return resolved.result
  }
}
