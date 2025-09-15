import { Request, Response, NextFunction, RequestHandler } from 'express';

/**
 * A utility function to handle async route handlers in Express.
 * It catches any errors thrown in the async function and passes them to the next middleware.
 */
export function asyncHandler(
  fn: (req: Request, res: Response, next: NextFunction) => Promise<any>
): RequestHandler {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}
