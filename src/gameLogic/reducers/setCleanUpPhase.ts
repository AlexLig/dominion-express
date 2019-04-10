import { IGameState } from '../interfaces/IGameState';
import { IAction } from '../interfaces/IAction';
import { getApplyEffectsOnActive } from './getApplyEffectsOnActive';
import { discardHandAndPlayed } from '../effects/discardHandAndPlayed';

export const setCleanUpPhase = (state: IGameState, action: IAction) => {
  const effectOnPlayer = getApplyEffectsOnActive(state.players);
  const players = effectOnPlayer(discardHandAndPlayed);
};
