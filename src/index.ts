import { DominionReducer } from './gameLogic/reducers/reducer';
import { createStore, applyMiddleware } from 'redux';
import {
  playCopperAction,
  playGoldAction,
  playSilverAction,
  playSmithyAction,
} from './gameLogic/actions/playActions';
import { logger } from './logger';

const store = createStore(DominionReducer);

logger.info(store.getState());

const unsubscribe = store.subscribe(() => logger.info(store.getState()));

store.dispatch({ type: 'SET_COIN_PHASE' });
store.dispatch(playCopperAction());
store.dispatch(playGoldAction());
store.dispatch(playSilverAction());
store.dispatch({ type: 'SET_ACTION_PHASE' });
store.dispatch(playSmithyAction());
store.dispatch({ type: 'SET_CLEANUP_PHASE' });

store.dispatch({ type: 'SET_COIN_PHASE' });
store.dispatch(playCopperAction());
store.dispatch(playGoldAction());
store.dispatch(playSilverAction());
store.dispatch({ type: 'SET_ACTION_PHASE' });
store.dispatch(playSmithyAction());
store.dispatch({ type: 'SET_CLEANUP_PHASE' });

store.dispatch({ type: 'SET_COIN_PHASE' });
store.dispatch(playCopperAction());
store.dispatch(playGoldAction());
store.dispatch(playSilverAction());
store.dispatch({ type: 'SET_ACTION_PHASE' });
store.dispatch(playSmithyAction());
store.dispatch({ type: 'SET_CLEANUP_PHASE' });

store.dispatch({ type: 'SET_COIN_PHASE' });
store.dispatch(playCopperAction());
store.dispatch(playGoldAction());
store.dispatch(playSilverAction());
store.dispatch({ type: 'SET_ACTION_PHASE' });
store.dispatch(playSmithyAction());
store.dispatch({ type: 'SET_CLEANUP_PHASE' });

unsubscribe();
