import { ITurn } from '../interfaces/IGameState';

export const addTreasure = (state: ITurn, amount: number): ITurn => {
  return { ...state, treasurePoints: state.treasurePoints + amount };
};
