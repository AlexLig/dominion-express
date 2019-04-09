import { IPlayer } from '../interfaces/IGameState';
export const effectOnPlayerFromPlayers = (players: IPlayer[]) => (
  effect: (pl: IPlayer) => IPlayer,
): IPlayer[] => {
  const activePlayer = players.find(pl => pl.isHisTurn === true);
  if (!activePlayer) throw new Error('players.find activePlayer not found!');
  const restPlayers = players.filter(pl => pl.isHisTurn === false);
  return [...restPlayers, effect(activePlayer)];
};
