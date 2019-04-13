import { CardName, CardType, Activate } from '../types';
import { IGameState } from './IGameState';
import { IAction } from './IAction';

export interface ICard {
  name: CardName;
  cost: number;
  type: CardType;
  activate: Activate<any>;
}
