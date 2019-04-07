import { Card } from '../types';

export const addCard = (cardArray: Card[], card: Card): Card[] => {
  return [...cardArray, card];
};
