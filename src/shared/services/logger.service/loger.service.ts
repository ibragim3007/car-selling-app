import { Logger, LoggerStrategy } from 'logger-service-ts';

class ConsoleLogger<TOptions> implements LoggerStrategy<TOptions> {
  log<TMessage>(message: TMessage, options?: TOptions) {
    if (typeof message === 'string') console.log(message, options || {});
  }

  error<TError>(e: TError, options?: TOptions) {
    if (e instanceof Error) console.error(e.message, options || {});
    if (typeof e === 'string') console.error(e);
  }

  success<TMessage>(message: TMessage, options?: TOptions) {
    if (typeof message === 'string') console.log(message, options || {});
  }
}

export const Inform = new Logger([new ConsoleLogger()]);
