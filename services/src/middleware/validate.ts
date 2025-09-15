import { ZodType } from 'zod';
import { Request, Response, NextFunction } from 'express';

type SourceType = 'body' | 'query' | 'params';

/**
 * Validate request data using a Zod schema.
 */
export function validate(schema: ZodType, source: SourceType = 'body') {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req[source]);

    if (!result.success) {
      res.status(400).json(result.error);

      return;
    }

    // Override with parsed & validated data
    req[source] = result.data;

    next();
  };
}
