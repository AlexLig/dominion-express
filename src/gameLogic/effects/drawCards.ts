import { IPlayer } from '../interfaces/IGameState';
import { tryToDrawCards } from './tryToDrawCards';
import { shuffleArray } from '../helpers/shuffle';
/**
 * Draws `numberOfCards` amound of cards.
 * If player's deck has not that many cards,
 * shuffles discard pile into deck,
 * with the previous remaining cards in deck on top of it,
 * and then draws `numberOfCards`
 */
export const drawCards = (numberOfCards: number) => (player: IPlayer): IPlayer => {
  if (player.deck.length > numberOfCards) return tryToDrawCards(numberOfCards)(player);

  const tempDeck = player.deck;
  const newDeck = [...shuffleArray(player.discard), ...tempDeck];
  const newPlayer: IPlayer = { ...player, deck: newDeck, discard: [] };
  return tryToDrawCards(numberOfCards)(newPlayer);
};
