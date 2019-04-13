import { IGameState } from '../../interfaces/IGameState';
import { IAction } from '../../interfaces/IAction';
import { moveFromHandToPlayed } from '../../effects/moveFromHandToPlayed';
import { getApplyEffectsOnActive } from '../getApplyEffectsOnActive';
import { Activate } from '../../types';

const activateTreasure = (amount: number): Activate<IGameState> => state => {
  return { ...state, treasurePoints: state.treasurePoints + amount };
};

export const gold = activateTreasure(3);
export const silver = activateTreasure(2);
export const copper = activateTreasure(1);
