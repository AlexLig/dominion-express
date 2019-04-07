import { IGameState, ITurn } from '../interfaces/IGameState';
import { addTreasure } from '../effects/addTreasure';
import { IAction } from '../interfaces/IAction';
import { moveFromHandToPlayed } from '../effects/moveFromHandToPlayed';
import { effectOnActivePlayer } from '../helpers/effectOnActivePlayer';

const playTreasure = (amount: number) => (
  state: IGameState,
  action: IAction,
): IGameState => {
  const turn: ITurn = addTreasure(state.turn, amount);
  const players = effectOnActivePlayer(
    state.players,
    moveFromHandToPlayed(action.cardName),
  );
  return { ...state, turn, players };
};
export const playGold = playTreasure(3);
export const playSilver = playTreasure(2);
export const playCopper = playTreasure(1);
