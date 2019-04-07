import { IPlayer } from '../interfaces/IGameState';
import { Card } from '../types';
import { removeCard } from '../helpers/removeCard';
import { addCard } from '../helpers/addCard';

export const moveFromHandToPlayed = (card: Card) => (activePlayer: IPlayer): IPlayer => {
  return {
    ...activePlayer,
    hand: removeCard(activePlayer.hand, card),
    played: addCard(activePlayer.played, card),
  };
};
