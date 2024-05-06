import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { IErrorMessage, IErrorResponseServer } from '../types/errors.types';
import { isObject } from './isObject';

export function isFetchBaseQueryError(error: unknown): error is FetchBaseQueryError {
  return typeof error === 'object' && error !== null && 'status' in error;
}

export const isServerError = (error: unknown): error is IErrorResponseServer => {
  if (!isFetchBaseQueryError(error)) return false;

  if ('data' in error && isObject(error.data)) {
    if ('errors' in error.data && isObject(error.data.errors)) {
      if (Array.isArray(error.data.errors)) {
        const a = (error.data.errors as IErrorMessage[]).some(err => err.title == undefined);
        return !a;
      }
    }
  }
  return false;
};

export function isErrorWithMessage(error: unknown): error is { message: string } {
  return typeof error === 'object' && error != null && 'message' in error && typeof (error as any).message === 'string';
}
