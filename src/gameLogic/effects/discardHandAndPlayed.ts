import { IPlayer } from '../interfaces/IGameState';

export const discardHandAndPlayed = (player: IPlayer): IPlayer => {
  return {
    ...player,
    hand: [],
    played: [],
    discard: [...player.hand, ...player.played],
  };
};
