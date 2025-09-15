import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';

import { green, red } from './utils/consoleColors';
import { handleError, handleErrorNotFound } from './middleware/error';
import { handleAuth } from './middleware/auth';

import usersRoutes from './modules/users/routes';

dotenv.config();

// Database Connection
mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => console.log(`[${green('MongoDB')}] Connected`))
  .catch((err) => console.error(`[${red('MongoDB')}] Error`, err));

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/users', handleAuth, usersRoutes);

// Error handling middlewares (should be last!!!)
app.use(handleErrorNotFound);
app.use(handleError);

const PORT = process.env.SERVER_PORT || 7007;

app.listen(PORT, () => console.log(`[${green('Server')}] Running on: http://localhost:${PORT}`));
