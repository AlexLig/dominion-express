import { ICard } from '../interfaces/ICard';
import { IAction } from '../interfaces/IAction';

export const playCardAction = (card: ICard): IAction => ({
  type: 'PLAY_CARD',
  card,
});
