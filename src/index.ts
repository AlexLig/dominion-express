import { DominionReducer } from './gameLogic/reducer';
import { createStore } from 'redux';
import {
  playCopperAction,
  playGoldAction,
  playSilverAction,
  playSmithyAction,
} from './gameLogic/actions/playActions';

const store = createStore(DominionReducer);

console.log(store.getState());

const unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(playCopperAction());
store.dispatch(playGoldAction());
store.dispatch(playSilverAction());
store.dispatch(playSmithyAction());

unsubscribe();
