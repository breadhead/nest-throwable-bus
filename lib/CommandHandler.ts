import { CommandHandler, ICommand } from '@nestjs/cqrs'

import CommandBusResult from './CommandBusResult'

type Execute = (command: ICommand, resolve: (value?) => void) => void

const makeExecuteThrowable = (execute: Execute) =>
  async function(command: ICommand, resolve: (value: CommandBusResult) => void) {
    try {
      const originalMethod = execute.bind(this) as Execute

      let result: any
      const fakeResolve = (resultFromExecute: any) => {
        result = resultFromExecute
      }

      await originalMethod(command, fakeResolve)

      resolve(CommandBusResult.success(result))
    } catch (error) {
      resolve(CommandBusResult.failure(error))
    }
  }

// tslint:disable-next-line:ban-types
export default (command: ICommand): ClassDecorator => <T extends Function>(target: T) => {
  CommandHandler(command)(target)

  const newExecute = makeExecuteThrowable(target.prototype.execute)

  target.prototype.execute = newExecute
}
