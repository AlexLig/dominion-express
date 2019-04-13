import { IPlayer } from '../interfaces/IGameState';
export const passActiveToNextPlayer = (players: IPlayer[]): IPlayer[] => {
  const currentActive = players.find(pl => pl.isHisTurn === true);
  const indexOfActive = players.indexOf(currentActive!);

  const nextActivePlayer =
    indexOfActive + 1 === players.length ? players[0] : players[indexOfActive + 1];

  const restPlayers: IPlayer[] =
    indexOfActive + 1 === players.length
      ? players.slice(1, indexOfActive)
      : players.slice(0, indexOfActive);

  return [
    ...restPlayers,
    toggleIsHisTurn(currentActive!),
    toggleIsHisTurn(nextActivePlayer),
  ];
};

const toggleIsHisTurn = (pl: IPlayer): IPlayer => ({ ...pl, isHisTurn: !pl.isHisTurn });
