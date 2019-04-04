import express from 'express';
import { connectToDb } from './startup/db';
import { winstonLogger } from './startup/winstonLogger';

const start = async () => {
  await connectToDb();
  const app = express();

  const PORT = process.env.PORT || 3000;
  app.listen(3000, () => winstonLogger.info(`Listening to PORT:${PORT}`));
};

start();
