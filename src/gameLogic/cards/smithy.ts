import { IGameState } from '../interfaces/IGameState';
import { drawCards } from '../effects/drawCards';
import { effectOnPlayerFromPlayers } from '../helpers/effectOnPlayerFromPlayers';
import { IAction } from '../interfaces/IAction';

export const playSmithy = (state: IGameState, action: IAction): IGameState => {
  const effectOnPlayer = effectOnPlayerFromPlayers(state.players);
  return { ...state, players: effectOnPlayer(drawCards(3)) };
};
