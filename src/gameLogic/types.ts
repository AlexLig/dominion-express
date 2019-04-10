import { IPlayer } from './interfaces/IGameState';

export type Card = 'GOLD' | 'SILVER' | 'COPPER' | 'SMITHY';
export type TurnPhase = 'ACTION' | 'COIN' | 'BUY' | 'CLEANUP';
export type ActionType =
  | 'PLAY_GOLD'
  | 'PLAY_SILVER'
  | 'PLAY_COPPER'
  | 'PLAY_SMITHY'
  | 'SET_ACTION_PHASE'
  | 'SET_BUY_PHASE'
  | 'SET_CLEANUP_PHASE'
  | 'SET_COIN_PHASE';
export type Action =
  | {
      type: 'PLAY_GOLD';
      cardName: 'GOLD';
      cardPhase: 'COIN';
    }
  | {
      type: 'PLAY_SILVER';
      cardName: 'SILVER';
      cardPhase: 'COIN';
    }
  | {
      type: 'PLAY_COPPER';
      cardName: 'COPPER';
      cardPhase: 'COIN';
    }
  | {
      type: 'PLAY_SMITHY';
      cardName: 'SMITHY';
      cardPhase: 'ACTION';
    };

export type Effect = (pl: IPlayer) => IPlayer;
