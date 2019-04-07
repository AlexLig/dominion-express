import { IPlayer } from '../interfaces/IGameState';

export const drawCardsFromDeck = (player: IPlayer, x: number): IPlayer => {
  let localDeck = [...player.deck];
  let localDiscarded = [...player.discard];
  // TODO Implement shuffle deck after moving discarded cards to  deck
  if (player.deck.length < x) {
    localDeck = [...localDeck, ...localDiscarded];
    localDiscarded = [];
  }
  localDeck = player.deck.slice(0, localDeck.length - (x + 1));
  return {
    ...player,
    hand: [...player.hand, ...localDeck.slice(-x)],
    deck: localDeck,
    discard: localDiscarded,
  };
};
