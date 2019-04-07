import { IGameState } from '../interfaces/IGameState';
import { IAction } from '../interfaces/IAction';

export const canCardBePlayed = (state: IGameState, action: IAction) => {
  const activePlayer = state.players.find(pl => pl.isHisTurn === true);
  const hasTheCard = activePlayer.hand.includes(action.cardName);
  const isTheRightTurnPhase = state.turn.phase === action.cardPhase;

  if (action.cardPhase === 'ACTION' && state.turn.actionPoints <= 0) return false;

  return hasTheCard && isTheRightTurnPhase;
};
