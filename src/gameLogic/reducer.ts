import { IGameState } from './interfaces/IGameState';
import { IAction } from './interfaces/IAction';
import { playSilver, playCopper, playGold } from './cards/treasureCards';

export const reducer = (state: IGameState, action: IAction) => {
  switch (action.type) {
    case 'PLAY_COPPER':
      return state.turn.phase === 'TREASURE' ? playCopper(state) : state;
    case 'PLAY_SILVER':
      return state.turn.phase === 'TREASURE' ? playSilver(state) : state;
    case 'PLAY_GOLD':
      return state.turn.phase === 'TREASURE' ? playGold(state) : state;
    default:
      return state;
  }
};
