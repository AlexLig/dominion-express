import { CardList } from './gameLogic/types';
import { copper, silver, gold } from './gameLogic/reducers/cardReducers/treasureCards';
import { smithy } from './gameLogic/reducers/cardReducers/smithy';

export const cards: CardList = {
  COPPER: { name: 'COPPER', cost: 0, type: 'TREASURE', reducer: copper },
  SILVER: { name: 'SILVER', cost: 3, type: 'TREASURE', reducer: silver },
  GOLD: { name: 'GOLD', cost: 6, type: 'TREASURE', reducer: gold },
  SMITHY: { name: 'SMITHY', cost: 4, type: 'ACTION', reducer: smithy },
  ESTATE: { name: 'ESTATE', cost: 2, type: 'VICTORY', reducer: smithy },
  DUCHY: { name: 'DUCHY', cost: 5, type: 'VICTORY', reducer: smithy },
  PROVINCE: { name: 'PROVINCE', cost: 8, type: 'VICTORY', reducer: smithy },
};
