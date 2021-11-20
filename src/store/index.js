import { combineReducers, createStore } from 'redux';
import { navItemsReducer } from './navItemsReducer';
import { soxReducer } from './soxReducer';
import { toyReducer } from './toyReducer';

export function getNavItems(state) {
  return state.navItems;
}

export function getSox(state) {
  return state.sox;
}

export function getToy(state) {
  return state.toy;
}

const reducers = combineReducers({
  navItems: navItemsReducer,
  sox: soxReducer,
  toy: toyReducer,
});

const store = createStore(reducers);

export default store;
