import { IAction } from '../interfaces/IAction';
import { IGameState, IPlayer } from '../interfaces/IGameState';
import { ICard } from '../interfaces/ICard';
import { CardName } from '../types';
import { cards } from '../../cardList';

export const findWinner = (state: IGameState, action: IAction): IGameState => {
  const players = state.players.map(resolveVictoryCardsToPlayer);
  const winner: IPlayer = players.reduce((pl, nextPl) =>
    nextPl.victoryPoints > pl.victoryPoints ? nextPl : pl,
  );
  return { ...state, winner, players };
};

const resolveVictoryCardsToPlayer = (player: IPlayer): IPlayer => {
  const { deck, hand, discard, played } = player;

  const allCards: CardName[] = [...deck, ...hand, ...discard, ...played];
  const victoryCards: CardName[] = allCards.filter(c => cards[c].type === 'VICTORY');

  const resolvedPlayer: IPlayer = victoryCards.reduce(
    (p, c) => cards[c].activate(p),
    player,
  );

  return resolvedPlayer;
};
