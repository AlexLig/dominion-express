import { IGameState } from '../interfaces/IGameState';
import { drawCardsFromDeck } from '../effects/drawCards';

export const playSmithy = (state: IGameState): IGameState => {
  const activePlayer = state.players.find(pl => pl.isHisTurn === true);
  const restPlayers = state.players.filter(pl => pl.isHisTurn === false);
  drawCardsFromDeck(activePlayer, 3);
  return { ...state, players: [...restPlayers, activePlayer] };
};
