import { Request, Response, NextFunction } from 'express';
import { ErrorMessage } from 'services/types/ErrorMessage';
import { ResError } from 'services/types/ResError';
import { supabase } from 'services/utils/supabase';

/**
 * Checks if Supabase `token` is valid and user is authenticated
 * If valid, Supabase user info is stored in `res.locals.user`
 */
export async function handleAuth(req: Request, res: Response, next: NextFunction) {
  try {
    const token = req.headers['authorization']?.replace('Bearer ', '');

    if (!token) {
      res.status(401).json(new ResError({ message: ErrorMessage.NO_TOKEN }));
      return;
    }

    const { data, error } = await supabase.auth.getUser(token);

    if (error || !data?.user) {
      res.status(401).json(new ResError({ message: ErrorMessage.INVALID_TOKEN }));
      return;
    }

    res.locals.user = data.user;

    next();
  } catch (err) {
    res.status(500).json(new ResError({ message: ErrorMessage.AUTH_CHECK_FAILED }));
    return;
  }
}
