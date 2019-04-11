import { IGameState } from '../interfaces/IGameState';
import { IAction } from '../interfaces/IAction';
import { playCard } from './playCard';
import { buyCard } from './buyCard';
import { setCleanUpPhase } from './setCleanUpPhase';
import { dummyState } from '../initialState';
import { findWinner } from './findWinner';

export const DominionReducer = (
  state: IGameState = dummyState,
  action: IAction,
): IGameState => {
  switch (action.type) {
    case 'PLAY_CARD':
      return playCard(state, action);
    case 'BUY_CARD':
      return buyCard(state, action);
    case 'SET_ACTION_PHASE':
      return { ...state, phase: 'ACTION' };
    case 'SET_COIN_PHASE':
      return { ...state, phase: 'COIN' };
    case 'SET_BUY_PHASE':
      return { ...state, phase: 'BUY' };
    case 'SET_CLEANUP_PHASE':
      return setCleanUpPhase(state, action);
    case 'FIND_WINNER':
      return findWinner(state, action);

    default:
      return state;
  }
};
