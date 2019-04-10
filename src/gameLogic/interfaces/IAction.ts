import { Card, TurnPhase, ActionType } from '../types';

export interface IAction {
  type: ActionType;
  cardName?: Card;
  cardPhase?: TurnPhase;
}
