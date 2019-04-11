import { IPlayer } from '../interfaces/IGameState';
import { CardName } from '../types';
import { removeCard } from '../helpers/removeCard';
import { addCard } from '../helpers/addCard';

export const moveFromHandToPlayed = (card: CardName) => (activePlayer: IPlayer): IPlayer => {
  return {
    ...activePlayer,
    hand: removeCard(activePlayer.hand, card),
    played: addCard(activePlayer.played, card),
  };
};
