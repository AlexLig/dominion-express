import { IGameState } from '../../interfaces/IGameState';
import { tryToDrawCards } from '../../effects/tryToDrawCards';
import { IAction } from '../../interfaces/IAction';
import { getApplyEffectsOnActive } from '../getApplyEffectsOnActive';
import { moveFromHandToPlayed } from '../../effects/moveFromHandToPlayed';

export const smithy = (state: IGameState, action: IAction): IGameState => {
  const effectOnPlayer = getApplyEffectsOnActive(state.players);
  const players = effectOnPlayer(
    tryToDrawCards(3),
    moveFromHandToPlayed(action.cardName!),
  );
  const actionPoints = state.actionPoints - 1;
  return { ...state, players, actionPoints };
};
