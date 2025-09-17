import express, { Request, Response } from 'express';
import { ResError } from 'services/types/ResError';
import { asyncHandler } from 'services/utils/asyncHandler';
import { UserModel } from '../models';
import { ErrorMessageUser } from '../types';
import { ErrorMessage } from 'services/types/ErrorMessage';
import { validate } from 'services/middleware/validate';
import { UserSchemaPost, UserSchemaPut } from '../schemas';

const router = express.Router();

// GET /users/self → fetch current user
router.get(
  '/self',
  asyncHandler(async (_req: Request, res: Response) => {
    const user = await UserModel.findOne({ supabaseId: res.locals?.user?.id || '' });

    if (!user) {
      res.status(404).json(new ResError({ message: ErrorMessageUser.NOT_FOUND }));
      return;
    }

    res.json(user);
  })
);

// READ BY ID: GET /users/:id
router.get(
  '/:id',
  asyncHandler(async (req: Request, res: Response) => {
    const user = await UserModel.findById(req.params.id);
    if (!user) {
      res.status(404).json(new ResError({ message: ErrorMessageUser.NOT_FOUND + '[id]' }));
      return;
    }
    res.json(user);
  })
);

// READ ALL: GET /users
router.get(
  '/',
  asyncHandler(async (_req: Request, res: Response) => {
    const users = await UserModel.find();
    res.json(users);
  })
);

// CREATE: POST /users
router.post(
  '/',
  validate(UserSchemaPost),
  asyncHandler(async (req: Request, res: Response) => {
    try {
      const user = await UserModel.create(req.body);
      res.status(201).json(user);
    } catch {
      res.status(400).json(new ResError({ message: ErrorMessageUser.ALREADY_EXISTS }));
    }
  })
);

// UPDATE: PUT /users/:id
router.put(
  '/:id',
  validate(UserSchemaPut),
  asyncHandler(async (req: Request, res: Response) => {
    try {
      const user = await UserModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!user) {
        res.status(404).json(new ResError({ message: ErrorMessageUser.NOT_FOUND }));
        return;
      }
      res.json(user);
    } catch {
      res.status(400).json(new ResError({ message: ErrorMessage.SERVER_ERROR }));
    }
  })
);

// DELETE: DELETE /users/:id
router.delete(
  '/:id',
  asyncHandler(async (req: Request, res: Response) => {
    const user = await UserModel.findByIdAndDelete(req.params.id);
    if (!user) {
      res.status(404).json(new ResError({ message: ErrorMessageUser.NOT_FOUND }));
      return;
    }
    res.json({ message: 'User deleted successfully.' });
  })
);

export default router;
