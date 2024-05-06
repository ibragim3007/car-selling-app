import { isServerError } from '@/shared/utils/isServerError';
import { Logger, LoggerStrategy } from 'logger-service-ts';

class ConsoleLogger<TOptions> implements LoggerStrategy<TOptions> {
  log<TMessage>(message: TMessage, options?: TOptions) {
    if (typeof message === 'string') console.log(message, options || {});
  }

  error<TError>(e: TError, options?: TOptions) {
    if (e instanceof Error) console.error(e.message, options || {});
    if (typeof e === 'string') console.error(e);
    if (isServerError(e)) console.error(e.data?.errors?.map(a => a.title).join(', '));
  }

  success<TMessage>(message: TMessage, options?: TOptions) {
    if (typeof message === 'string') console.log(message, options || {});
  }
}

export const Inform = new Logger([new ConsoleLogger()]);
