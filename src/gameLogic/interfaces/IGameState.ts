import { CardName, TurnPhase } from '../types';

export interface IGameState {
  winner: IPlayer | undefined;
  players: IPlayer[];
  actionPoints: number;
  buyPoints: number;
  treasurePoints: number;
  phase: TurnPhase;
  cards: CardName[];
  trash: CardName[];
}
export interface IPlayer {
  name: string;
  isHisTurn: boolean;
  hand: CardName[];
  deck: CardName[];
  discard: CardName[];
  played: CardName[];
  victoryPoints: number;
}
