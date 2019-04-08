import { IGameState, IPlayer } from './interfaces/IGameState';
import { Card } from './types';
const cardPile: Card[] = ['GOLD', 'SILVER', 'COPPER', 'SMITHY'];
const createPlayer = ({
  name = 'robot',
  isHisTurn = false,
  hand = cardPile,
  deck = cardPile,
  discard = [],
  played = [],
}): IPlayer => ({
  name,
  isHisTurn,
  hand,
  deck,
  discard,
  played,
});

const players: IPlayer[] = [
  createPlayer({ isHisTurn: true }),
  createPlayer({}),
  createPlayer({}),
  createPlayer({}),
];

export const dummyState: IGameState = {
  actionPoints: 10,
  buyPoints: 10,
  treasurePoints: 0,
  cards: cardPile,
  trash: [],
  phase: 'BUY',
  players,
};
