import { IGameState, IPlayer } from '../interfaces/IGameState';
import { IAction } from '../interfaces/IAction';
import { removeCard } from '../helpers/removeCard';
import { addCard } from '../helpers/addCard';

export const buyCard = (state: IGameState, action: IAction): IGameState => {
  const { card } = action;
  if (!card) return state;

  // Check if player has at least one buy action.
  if (state.buyPoints <= 0) return state;
  // Check if has enough treasure points to buy the desired card.
  if (state.treasurePoints < card.cost) return state;
  // Check if the card exists
  if (!state.cards.includes(card.name)) return state;

  // Find the ActivePlayer and Rest Players
  const activePlayer = state.players.find(pl => pl.isHisTurn === true);
  const restPlayers = state.players.filter(pl => pl.isHisTurn === false);
  // Move the card from state.cards to players discard pile.
  const cards = removeCard(state.cards, card.name);
  const discard = addCard(activePlayer!.discard, card.name);

  // Update active player and players[]
  const players: IPlayer[] = [...restPlayers, { ...activePlayer!, discard }];
  // Remove 1 buy action
  const buyPoints = state.buyPoints - 1;
  // Remove card's cost from treasurePoints
  const treasurePoints = state.treasurePoints - card.cost;
  // Return the new state
  return { ...state, cards, buyPoints, treasurePoints, players };
};
