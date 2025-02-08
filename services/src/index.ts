// src/index.ts
import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

// TODO: Create better setup for the server
const app: Express = express();
const port = process.env.SERVER_PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('De si bate!');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at: http://localhost:${port}`);
});
