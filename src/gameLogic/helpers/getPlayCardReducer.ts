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
  if (!activePlayer) throw new Error('players.find activePlayer not found!');
  const hasTheCard = activePlayer.hand.includes(action.cardName);

  const isTheRightTurnPhase = state.phase === action.cardPhase;
  let canBePlayed = hasTheCard && isTheRightTurnPhase;
  if (action.cardPhase === 'ACTION' && state.actionPoints <= 0) canBePlayed = false;

  return canBePlayed ? cardReducer(state, action) : state;
};
