export type Card = 'GOLD' | 'SILVER' | 'COPPER' | 'SMITHY';
export type TurnPhase = 'ACTION' | 'BUY';
export type ActionType = 'PLAY_GOLD' | 'PLAY_SILVER' | 'PLAY_COPPER' | 'PLAY_SMITHY';
export type Action =
  | {
      type: 'PLAY_GOLD';
      cardName: 'GOLD';
      cardPhase: 'BUY';
    }
  | {
      type: 'PLAY_SILVER';
      cardName: 'SILVER';
      cardPhase: 'BUY';
    }
  | {
      type: 'PLAY_COPPER';
      cardName: 'COPPER';
      cardPhase: 'BUY';
    }
  | {
      type: 'PLAY_SMITHY';
      cardName: 'SMITHY';
      cardPhase: 'ACTION';
    };
