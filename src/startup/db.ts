import mongoose from 'mongoose';

import { winstonLogger } from './winstonLogger';
export const connectToDb = async () => {
  try {
    await mongoose.connect('mongodb://localhost/dominion', { useNewUrlParser: true });
    winstonLogger.info('Connected to MongoDb...');
  } catch (error) {
    winstonLogger.error('Failed to connect to MongoDb');
  }
};
