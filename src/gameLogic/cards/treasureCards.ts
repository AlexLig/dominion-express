import { IGameState, ITurn } from '../interfaces/IGameState';
import { addTreasure } from '../effects/addTreasure';

const playTreasure = (amount: number) => (state: IGameState): IGameState => {
  const turn: ITurn = addTreasure(state.turn, 3);
  return { ...state, turn };
};
export const playGold = playTreasure(3);
export const playSilver = playTreasure(2);
export const playCopper = playTreasure(1);
