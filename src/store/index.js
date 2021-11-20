import { combineReducers, createStore } from 'redux';
import { goodsReducer } from './goodsReducer';
import { carsReducer } from './carsReducer';
import { navItemsReducer } from './navItemsReducer';

export function getCars(state) {
  return state.cars;
}

export function getGoods(state) {
  return state.goods;
}

export function getNavItems(state) {
  return state.navItems;
}

const reducers = combineReducers({
  navItems: navItemsReducer,
  cars: carsReducer,
  goods: goodsReducer,
});

const store = createStore(reducers);

export default store;
