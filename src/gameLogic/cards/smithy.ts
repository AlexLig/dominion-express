import { IGameState } from '../interfaces/IGameState';
import { drawCards } from '../effects/drawCards';
import { effectOnActivePlayer } from '../helpers/effectOnActivePlayer';

export const playSmithy = (state: IGameState): IGameState => {
  return { ...state, players: effectOnActivePlayer(state.players, drawCards(3)) };
};
