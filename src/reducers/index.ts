import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { IState as CartState, modifyCart } from './cartReducers';
import { IState as StoreState, modifyStore } from './storeReducerW3';
// import { IState as Web3State, modifyWeb3 } from './web3Reducer';

export interface IAppState {
    modifyCart: CartState;
    modifyStore: StoreState;
    // modifyWeb3: Web3State;
}

export default combineReducers({
    modifyCart,
    modifyStore,
    // modifyWeb3,
    routerReducer
});
