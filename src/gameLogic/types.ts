import { IPlayer } from './interfaces/IGameState';
import { ICard } from './interfaces/ICard';

export type CardList = { [key in CardName]: ICard };
export type Activate<T> = (state: T) => T;
export type Effect = (pl: IPlayer) => IPlayer;
export type CardType = 'ACTION' | 'TREASURE' | 'VICTORY';
export type TurnPhase = 'ACTION' | 'COIN' | 'BUY' | 'CLEANUP';
export type CardName =
  | 'GOLD'
  | 'SILVER'
  | 'COPPER'
  | 'SMITHY'
  | 'ESTATE'
  | 'PROVINCE'
  | 'DUCHY';
export type ActionType =
  | 'PLAY_CARD'
  | 'BUY_CARD'
  | 'SET_ACTION_PHASE'
  | 'SET_BUY_PHASE'
  | 'SET_CLEANUP_PHASE'
  | 'SET_COIN_PHASE'
  | 'FIND_WINNER';
