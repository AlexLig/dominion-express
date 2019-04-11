import { CardName, TurnPhase, ActionType } from '../types';
import { ICard } from './ICard';

export interface IAction {
  type: ActionType;
  card?: ICard;
}
