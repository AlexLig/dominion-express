import { IGameState } from './interfaces/IGameState';
import { IAction } from './interfaces/IAction';
import { gold, silver, copper } from './cards/treasureCards';
import { smithy } from './cards/smithy';
import { getPlayCardReducer } from './helpers/getPlayCardReducer';

export const reducer = (state: IGameState, action: IAction) => {
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

    default:
      return state;
  }
};
