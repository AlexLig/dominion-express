import { Card, CardType } from '../types';
import { IGameState } from './IGameState';
import { IAction } from './IAction';

export interface ICard {
  name: Card;
  cost: number;
  type: CardType;
  reducer: (s: IGameState, a: IAction) => IGameState;
}
