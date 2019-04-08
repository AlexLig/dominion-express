import { IGameState } from '../interfaces/IGameState';
import { IAction } from '../interfaces/IAction';
import { moveFromHandToPlayed } from '../effects/moveFromHandToPlayed';
import { effectOnPlayerFromPlayers } from '../helpers/effectOnPlayerFromPlayers';

const playTreasure = (amount: number) => (
  state: IGameState,
  action: IAction,
): IGameState => {
  const effectOnPlayer = effectOnPlayerFromPlayers(state.players);
  const players = effectOnPlayer(moveFromHandToPlayed(action.cardName));
  const treasurePoints = state.treasurePoints + amount;

  return { ...state, treasurePoints, players };
};
export const playGold = playTreasure(3);
export const playSilver = playTreasure(2);
export const playCopper = playTreasure(1);
