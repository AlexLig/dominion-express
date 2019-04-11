import { IGameState } from '../interfaces/IGameState';
import { IAction } from '../interfaces/IAction';
import { gold, silver, copper } from './cardReducers/treasureCards';
import { smithy } from './cardReducers/smithy';
import { getPlayCardReducer } from './getPlayCardReducer';
import { dummyState } from '../initialState';
import { setCleanUpPhase } from './setCleanUpPhase';
import { buyCard } from './buyCard';

export const DominionReducer = (
  state: IGameState = dummyState,
  action: IAction,
): IGameState => {
  const playCard = getPlayCardReducer(state, action);
  switch (action.type) {
    case 'PLAY_GOLD':
      return playCard(gold);
    case 'PLAY_SILVER':
      return playCard(silver);

    case 'PLAY_COPPER':
      return playCard(copper);

    case 'PLAY_SMITHY':
      return playCard(smithy);

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

    default:
      return state;
  }
};
