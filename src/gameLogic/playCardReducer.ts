import { IGameState } from './interfaces/IGameState';
import { IAction } from './interfaces/IAction';
import { canCardBePlayed } from './helpers/canCardBePlayed';
import { playGold, playSilver, playCopper } from './cards/treasureCards';

export const playCardReducer = (state: IGameState, action: IAction): IGameState => {
  if (!canCardBePlayed(state, action)) return state;
  switch (action.cardName) {
    case 'Gold':
      return playGold(state, action);
    case 'Silver':
      return playSilver(state, action);
    case 'Copper':
      return playCopper(state, action);
    case 'Smithy':
    default:
      return state;
  }
};
