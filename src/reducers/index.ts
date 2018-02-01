import { combineReducers } from 'redux';
import { IState as CartState, modifyCart } from './cartReducers';
import { IState as StoreState, modifyStore } from './storeReducers';

export interface IAppState {
    modifyCart: CartState;
    modifyStore: StoreState;
}

export default combineReducers({
    modifyCart,
    modifyStore
});
