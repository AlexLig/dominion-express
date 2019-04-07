import { IPlayer } from '../interfaces/IGameState';
import { Card } from '../types';
import { removeCard } from '../helpers/removeCard';
import { addCard } from '../helpers/addCard';

export const moveFromHandToPlayed = (activePlayer: IPlayer, card: Card): IPlayer => {
  return {
    ...activePlayer,
    hand: removeCard(activePlayer.hand, card),
    played: addCard(activePlayer.played, card),
  };
};
