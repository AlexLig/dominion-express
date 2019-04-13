import { IPlayer } from '../interfaces/IGameState';

export const tryToDrawCards = (numberOfCards: number) => (player: IPlayer): IPlayer => {
  const drawnCards = player.deck.slice(-numberOfCards);
  const remainingCardsInDeck =
    player.deck.length < numberOfCards
      ? []
      : player.deck.slice(0, player.deck.length - numberOfCards);

  return {
    ...player,
    hand: [...player.hand, ...drawnCards],
    deck: [...remainingCardsInDeck],
  };
};
