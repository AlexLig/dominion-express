import { IGameState } from './interfaces/IGameState';
import { IAction } from './interfaces/IAction';
import { playGold, playSilver, playCopper } from './cards/treasureCards';
import { playSmithy } from './cards/smithy';

export const reducer = (state: IGameState, action: IAction) => {
  switch (action.type) {
    case 'PLAY_GOLD':
      return playGold(state, action);
    case 'PLAY_SILVER':
      return playSilver(state, action);

    case 'PLAY_COPPER':
      return playCopper(state, action);

    case 'PLAY_SMITHY':
      return playSmithy(state, action);

    default:
      return state;
  }
};
