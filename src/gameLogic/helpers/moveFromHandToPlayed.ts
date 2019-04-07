import { IPlayer } from '../interfaces/IGameState';
import { Card } from '../types';
import { removeCard } from './removeCard';
import { addCard } from './addCard';

export const moveFromHandToPlayed = (activePlayer: IPlayer, card: Card): IPlayer => {
  return {
    ...activePlayer,
    hand: removeCard(activePlayer.hand, card),
    played: addCard(activePlayer.played, card),
  };
};
