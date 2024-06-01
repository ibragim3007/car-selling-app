import { isServerError } from '@/shared/utils/isServerError';
import { Logger, LoggerStrategy } from 'logger-service-ts';
import Toast from 'react-native-toast-message';

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

class ToastLogger<TOptions> implements LoggerStrategy<TOptions> {
  log<TMessage>(message: TMessage, options?: TOptions) {
    if (typeof message === 'string') Toast.show({ text1: message, type: 'info' });
  }

  error<TError>(e: TError, options?: TOptions) {
    if (e instanceof Error) Toast.show({ text1: e.message, type: 'error' });
    if (typeof e === 'string') Toast.show({ text1: e, type: 'error' });
    if (isServerError(e)) Toast.show({ text1: e.data?.errors?.map(a => a.title).join(', '), type: 'error' });
  }

  success<TMessage>(message: TMessage, options?: TOptions) {
    if (typeof message === 'string') Toast.show({ text1: message, type: 'success' });
  }
}

export const Inform = new Logger([new ConsoleLogger(), new ToastLogger()]);
