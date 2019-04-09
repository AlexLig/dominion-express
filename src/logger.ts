import { createLogger, format, transports } from 'winston';
const { combine, printf } = format;
const myFormat = printf(info => {
  return `NEW STATE: \n ${JSON.stringify(info.message)}`;
});

export const logger = createLogger({
  level: 'info',
  format: combine(myFormat),

  transports: [new transports.File({ filename: 'logGameState.log', level: 'info' })],
});
