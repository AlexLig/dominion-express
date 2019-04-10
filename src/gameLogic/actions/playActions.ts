import { IAction } from '../interfaces/IAction';
import { Action } from '../types';

export const playGoldAction = (): Action => ({
  type: 'PLAY_GOLD',
  cardName: 'GOLD',
  cardPhase: 'COIN',
});
export const playSilverAction = (): Action => ({
  type: 'PLAY_SILVER',
  cardName: 'SILVER',
  cardPhase: 'COIN',
});
export const playCopperAction = (): Action => ({
  type: 'PLAY_COPPER',
  cardName: 'COPPER',
  cardPhase: 'COIN',
});
export const playSmithyAction = (): Action => ({
  type: 'PLAY_SMITHY',
  cardName: 'SMITHY',
  cardPhase: 'ACTION',
});
