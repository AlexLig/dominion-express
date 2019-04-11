import { IGameState } from '../../interfaces/IGameState';
import { tryToDrawCards } from '../../effects/tryToDrawCards';
import { IAction } from '../../interfaces/IAction';
import { getApplyEffectsOnActive } from '../getApplyEffectsOnActive';
import { moveFromHandToPlayed } from '../../effects/moveFromHandToPlayed';
import { Activate } from '../../types';

export const smithy: Activate<IGameState> = state => {
  const effectOnPlayer = getApplyEffectsOnActive(state.players);
  const players = effectOnPlayer(tryToDrawCards(3));
  const actionPoints = state.actionPoints - 1;
  return { ...state, players, actionPoints };
};
