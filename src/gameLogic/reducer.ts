import { IGameState } from './interfaces/IGameState';
import { IAction } from './interfaces/IAction';
import { playCardReducer } from './playCardReducer';

export const reducer = (state: IGameState, action: IAction) => {
  switch (action.type) {
    case 'PLAY_CARD':
      return playCardReducer(state, action);
    default:
      return state;
  }
};
