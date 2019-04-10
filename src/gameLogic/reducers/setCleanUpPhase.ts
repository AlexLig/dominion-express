import { IGameState } from '../interfaces/IGameState';
import { IAction } from '../interfaces/IAction';
import { getApplyEffectsOnActive } from './getApplyEffectsOnActive';
import { discardHandAndPlayed } from '../effects/discardHandAndPlayed';
import { drawCards } from '../effects/drawCards';
import { passActiveToNextPlayer } from '../helpers/passActiveToNextPlayer';

export const setCleanUpPhase = (state: IGameState, action: IAction): IGameState => {
  const effectOnPlayer = getApplyEffectsOnActive(state.players);
  let players = effectOnPlayer(discardHandAndPlayed, drawCards(5));
  players = passActiveToNextPlayer(players);
  const actionPoints = 1;
  const buyPoints = 1;
  const treasurePoints = 0;
  const phase = 'ACTION';
  return { ...state, actionPoints, buyPoints, treasurePoints, players, phase };
};
