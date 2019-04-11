import { CardName } from '../types';

export const removeCard = (cardArray: CardName[], card: CardName): CardName[] => {
  const newCardArray = [...cardArray];
  const index = newCardArray.indexOf(card);
  if (index > -1) newCardArray.splice(index, 1);
  return newCardArray;
};
