import { IGameState, ITurn } from '../interfaces/IGameState';
import { addTreasure } from '../effects/addTreasure';
import { IAction } from '../interfaces/IAction';
import { moveFromHandToPlayed } from '../effects/moveFromHandToPlayed';

const playTreasure = (amount: number) => (
  state: IGameState,
  action: IAction,
): IGameState => {
  const restPlayers = state.players.filter(pl => pl.isHisTurn === false);
  const activePlayer = state.players.find(pl => pl.isHisTurn === true);
  const updatedActivePlayer = moveFromHandToPlayed(activePlayer, action.cardName);

  const turn: ITurn = addTreasure(state.turn, amount);
  const players = [...restPlayers, updatedActivePlayer];
  return { ...state, turn, players };
};
export const playGold = playTreasure(3);
export const playSilver = playTreasure(2);
export const playCopper = playTreasure(1);
