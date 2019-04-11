import { CardName, CardType } from '../types';
import { IGameState } from './IGameState';
import { IAction } from './IAction';

export interface ICard {
  name: CardName;
  cost: number;
  type: CardType;
  reducer: (s: IGameState, a: IAction) => IGameState;
}
