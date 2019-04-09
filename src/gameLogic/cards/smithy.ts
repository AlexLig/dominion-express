import { IGameState } from '../interfaces/IGameState';
import { drawCards } from '../effects/drawCards';
import { effectOnPlayerFromPlayers } from '../reducers/effectOnPlayerFromPlayers';
import { IAction } from '../interfaces/IAction';

export const smithy = (state: IGameState, action: IAction): IGameState => {
  const effectOnPlayer = effectOnPlayerFromPlayers(state.players);
  const players = effectOnPlayer(drawCards(3));
  const actionPoints = state.actionPoints - 1;
  return { ...state, players, actionPoints };
};
