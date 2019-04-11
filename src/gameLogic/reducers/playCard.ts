import { IGameState } from '../interfaces/IGameState';
import { IAction } from '../interfaces/IAction';
import { getApplyEffectsOnActive } from './getApplyEffectsOnActive';
import { moveFromHandToPlayed } from '../effects/moveFromHandToPlayed';
import { getPhaseFromCard } from '../helpers/getPhaseFromCard';

/**
 * Accepts state and action.
 * Returns a function that calls its input, a card reducer,
 * only if the validation logic is satisfied.
 */
export const playCard = (state: IGameState, action: IAction): IGameState => {
  const { card } = action;
  if (!card || !card.reducer) return state;

  const activePlayer = state.players.find(pl => pl.isHisTurn === true);

  if (!activePlayer) return state;

  if (!activePlayer.hand.includes(card.name)) return state;

  if (state.phase !== getPhaseFromCard(card)) return state;

  if (getPhaseFromCard(card) === 'ACTION' && state.actionPoints <= 0) return state;

  const effectOnPlayer = getApplyEffectsOnActive(state.players);
  const players = effectOnPlayer(moveFromHandToPlayed(card.name));

  return card.reducer({ ...state, players }, action);
};
