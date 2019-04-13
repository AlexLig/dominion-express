import { ICard } from '../interfaces/ICard';
import { TurnPhase } from '../types';

export const getPhaseFromCard = (card: ICard): TurnPhase => {
  switch (card.type) {
    case 'ACTION':
      return 'ACTION';
    case 'TREASURE':
      return 'COIN';
    // Possible refactor. Victory Cards can be played.
    default:
      return 'CLEANUP';
  }
};
