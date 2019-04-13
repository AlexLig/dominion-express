import { IPlayer } from '../../interfaces/IGameState';
import { Activate } from '../../types';

const activateVictory = (victoryPoints: number): Activate<IPlayer> => player => {
  return { ...player, victoryPoints: victoryPoints + player.victoryPoints };
};

export const estate = activateVictory(1);
export const duchy = activateVictory(3);
export const province = activateVictory(6);
