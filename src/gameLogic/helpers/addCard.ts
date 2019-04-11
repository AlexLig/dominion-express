import { CardName } from '../types';

export const addCard = (cardArray: CardName[], card: CardName): CardName[] => {
  return [...cardArray, card];
};
