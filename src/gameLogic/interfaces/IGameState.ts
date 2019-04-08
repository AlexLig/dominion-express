import { Card, TurnPhase } from '../types';

export interface IGameState {
  players: IPlayer[];
  actionPoints: number;
  buyPoints: number;
  treasurePoints: number;
  phase: TurnPhase;
  cards: Card[];
  trash: Card[];
}
export interface IPlayer {
  name: string;
  isHisTurn: boolean;
  hand: Card[];
  deck: Card[];
  discard: Card[];
  played: Card[];
}
