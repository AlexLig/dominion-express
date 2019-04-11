import { IGameState } from '../interfaces/IGameState';
import { IAction } from '../interfaces/IAction';

/**
 * Accepts state and action.
 * Returns a function that calls its input, a card reducer,
 * only if the validation logic is satisfied.
 */
export const getPlayCardReducer = (state: IGameState, action: IAction) => (
  cardReducer: (state: IGameState, action: IAction) => IGameState,
): IGameState => {
  const activePlayer = state.players.find(pl => pl.isHisTurn === true);

  if (!activePlayer) return state;

  if (!activePlayer.hand.includes(action.cardName!)) return state;

  if (state.phase !== action.cardPhase) return state;

  if (action.cardPhase === 'ACTION' && state.actionPoints <= 0) return state;

  return cardReducer(state, action);
};
