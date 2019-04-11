import { IGameState, IPlayer } from './interfaces/IGameState';
import { CardName } from './types';
const cardPile: CardName[] = ['GOLD', 'SILVER', 'COPPER', 'SMITHY'];
const createPlayer = ({
  name = 'OOOOOO',
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
  createPlayer({ isHisTurn: true, name: '~PLAYER1~' }),
  createPlayer({ name: '~PLAYER2~' }),
  createPlayer({ name: '~PLAYER3~' }),
  createPlayer({ name: '~PLAYER4~' }),
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
