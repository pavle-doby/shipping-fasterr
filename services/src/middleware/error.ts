import { NextFunction, Request, Response } from 'express';
import { red } from 'services/utils/consoleColors';
import { ResError } from 'services/types/ResError';
import { ErrorMessage } from '../types/ErrorMessage';
import { safeStringify } from 'services/utils/safeStringify';

/**
 * Middleware to handle not found endpoints
 */
export const handleErrorNotFound = (_req: Request, res: Response, _next: NextFunction) => {
  res.status(404).json(new ResError({ message: ErrorMessage.NOT_FOUND_ENDPOINT }));
};

/**
 * Error handling middleware
 *
 * @param next - If removed as param `errorMiddleware` will not be called
 */
export function handleError(err: any, _req: Request, res: Response, _next: NextFunction) {
  let errMessage: string =
    (typeof err.message !== 'string' && safeStringify(err.message)) ||
    err.message ||
    ErrorMessage.SERVER_ERROR;

  console.error(`${red('Internal server error')}:`, err);

  res.status(err.status || 500).json(new ResError({ message: errMessage }));
}
