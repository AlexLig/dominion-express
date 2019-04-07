import { Card, TurnPhase } from '../types';

export interface IAction {
  type: string;
  cardName: Card;
  cardPhase: TurnPhase;
}
