import { CardList } from './gameLogic/types';
import { copper, silver, gold } from './gameLogic/reducers/cardReducers/treasureCards';
import { smithy } from './gameLogic/reducers/cardReducers/actionCards';
import { estate, duchy, province } from './gameLogic/reducers/cardReducers/victoryCards';

export const cards: CardList = {
  COPPER: { name: 'COPPER', cost: 0, type: 'TREASURE', activate: copper },
  SILVER: { name: 'SILVER', cost: 3, type: 'TREASURE', activate: silver },
  GOLD: { name: 'GOLD', cost: 6, type: 'TREASURE', activate: gold },
  SMITHY: { name: 'SMITHY', cost: 4, type: 'ACTION', activate: smithy },
  ESTATE: { name: 'ESTATE', cost: 2, type: 'VICTORY', activate: estate },
  DUCHY: { name: 'DUCHY', cost: 5, type: 'VICTORY', activate: duchy },
  PROVINCE: { name: 'PROVINCE', cost: 8, type: 'VICTORY', activate: province },
};
