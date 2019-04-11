import { IPlayer } from '../interfaces/IGameState';
import { Effect } from '../types';
export const getApplyEffectsOnActive = (players: IPlayer[]) => (
  ...effects: Effect[]
): IPlayer[] => {
  const activePlayer = players.find(pl => pl.isHisTurn === true);
  if (!activePlayer) return players;
  const restPlayers = players.filter(pl => pl.isHisTurn === false);

  const affectedPlayer = effects
    .map(ef => ef(activePlayer))
    .reduce((acc, val) => ({ ...acc, ...val }));

  return [...restPlayers, affectedPlayer];
};
