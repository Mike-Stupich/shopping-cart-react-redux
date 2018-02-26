import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import {
    // addStoreItem,
    // getItem,
    getDeployedStore, getItemFromContract,
    // newStore,
    setIndex,
} from './actions/StoreActions';
import reducers from './reducers';
// import * as testData from './testData';

export const history = createHistory();
const routeMiddleware = routerMiddleware(history);
const ContractAddress = '0xcb152a2aa90055a0d255ca7dbaeb85edfdc86096';

const store = createStore(
    reducers,
    applyMiddleware(routeMiddleware, thunk)
);

store.subscribe(() => {
    const state: any = store.getState();
    console.log(state);
});

// store.dispatch(newStore());
store.dispatch(getDeployedStore(ContractAddress));
const storeState: any = store.getState();
storeState.modifyStore.storeContract.then((contract: any) => {
    // TODO: Add item count to solidity contract, then grab all items up to that
    // store.dispatch(setIndex(index));
    store.dispatch(setIndex(3));
    const index = 3;
    for (let i = 0; i < index; i++) {
        store.dispatch(getItemFromContract(i));
    }
    return index;
});


// store.dispatch(getItem(1));

// testData.items.map((item) => {
//     store.dispatch(addStoreItem(item));
// });
// store.dispatch(addStoreItem(testData.items[0]));

export default store;
