import { IGameState } from '../../interfaces/IGameState';
import { tryToDrawCards } from '../../effects/tryToDrawCards';
import { getApplyEffectsOnActive } from '../getApplyEffectsOnActive';
import { Activate } from '../../types';

export const smithy: Activate<IGameState> = state => {
  const effectOnPlayer = getApplyEffectsOnActive(state.players);
  const players = effectOnPlayer(tryToDrawCards(3));
  const actionPoints = state.actionPoints - 1;
  return { ...state, players, actionPoints };
};
