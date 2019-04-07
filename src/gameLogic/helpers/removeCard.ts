import { Card } from '../types';

export const removeCard = (cardArray: Card[], card: Card): Card[] => {
  const newCardArray = [...cardArray];
  const index = newCardArray.indexOf(card);
  if (index > -1) newCardArray.splice(index, 1);
  return newCardArray;
};
