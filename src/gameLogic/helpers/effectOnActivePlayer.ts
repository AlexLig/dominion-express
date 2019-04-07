import { IPlayer } from '../interfaces/IGameState';
import { access } from 'fs';

export const effectOnActivePlayer = (
  players: IPlayer[],
  effect: (pl: IPlayer) => IPlayer,
): IPlayer[] => {
  const activePlayer = players.find(pl => pl.isHisTurn === true);
  const restPlayers = players.filter(pl => pl.isHisTurn === false);

  return [...restPlayers, effect(activePlayer)];
};
