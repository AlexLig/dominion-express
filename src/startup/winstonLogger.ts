import { createLogger, format, transports } from 'winston';

export const winstonLogger = createLogger({
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'errors.log', level: 'error' }),
  ],
});
