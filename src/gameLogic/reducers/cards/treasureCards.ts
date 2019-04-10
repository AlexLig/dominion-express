import { IGameState } from '../../interfaces/IGameState';
import { IAction } from '../../interfaces/IAction';
import { moveFromHandToPlayed } from '../../effects/moveFromHandToPlayed';
import { getApplyEffectsOnActive } from '../getApplyEffectsOnActive';

const playTreasure = (amount: number) => (
  state: IGameState,
  action: IAction,
): IGameState => {
  const effectOnPlayer = getApplyEffectsOnActive(state.players);
  const players = effectOnPlayer(moveFromHandToPlayed(action.cardName));
  const treasurePoints = state.treasurePoints + amount;

  return { ...state, treasurePoints, players };
};
export const gold = playTreasure(3);
export const silver = playTreasure(2);
export const copper = playTreasure(1);
