export default class CommandBusResult<R = any, E = any> {
  public static success<R = any>(result?): CommandBusResult<R, undefined> {
    return new CommandBusResult(result)
  }

  public static failure<E = any>(error): CommandBusResult<undefined, E> {
    return new CommandBusResult(undefined, error)
  }

  public constructor(
    public readonly result?: R,
    public readonly error?: E,
  ) { }
}
