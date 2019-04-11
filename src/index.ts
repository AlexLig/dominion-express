import { DominionReducer } from './gameLogic/reducers/reducer';
import { createStore, applyMiddleware } from 'redux';
import { playCardAction } from './gameLogic/actions/playActions';
import { logger } from './logger';
import { cards } from './cardList';

const store = createStore(DominionReducer);

logger.info(store.getState());

const unsubscribe = store.subscribe(() => logger.info(store.getState()));

store.dispatch({ type: 'SET_COIN_PHASE' });
store.dispatch(playCardAction(cards.COPPER));
store.dispatch(playCardAction(cards.SILVER));
store.dispatch(playCardAction(cards.GOLD));
store.dispatch({ type: 'SET_ACTION_PHASE' });
store.dispatch(playCardAction(cards.SMITHY));
store.dispatch({ type: 'SET_CLEANUP_PHASE' });

unsubscribe();
