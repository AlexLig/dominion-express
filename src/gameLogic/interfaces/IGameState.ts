export interface IGameState {
  currentPlayer: string;
  players: IPlayer[];
  turn: ITurn;
  cards: ICard[];
  discarded: ICard[];
}
export interface IPlayer {
  name: string;
  hand: ICard[];
  deck: ICard[];
}
export interface ICard {
  name: string;
  type: string;
  cost: number;
  description: string;
}
export interface ITurn {
  actionPoints: number;
  buyPoints: number;
  treasurePoints: number;
}
