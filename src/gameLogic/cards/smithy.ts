import { IGameState } from '../interfaces/IGameState';
import { drawCards } from '../effects/drawCards';
import { effectOnPlayerFromPlayers } from '../helpers/effectOnPlayerFromPlayers';

export const playSmithy = (state: IGameState): IGameState => {
  const effectOnPlayer = effectOnPlayerFromPlayers(state.players);
  return { ...state, players: effectOnPlayer(drawCards(3)) };
};
