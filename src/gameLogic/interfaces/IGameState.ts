import { Card, TurnPhase } from '../types';

export interface IGameState {
  players: IPlayer[];
  turn: ITurn;
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
export interface ITurn {
  actionPoints: number;
  buyPoints: number;
  treasurePoints: number;
  phase: TurnPhase;
}
