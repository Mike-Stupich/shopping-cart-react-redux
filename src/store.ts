import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { addItemAction } from './actions/CartActions';
import { addStoreItem } from './actions/StoreActions';
import { deployStoreContract } from './actions/Web3Actions';
import reducers from './reducers';
import { cart, items } from './testData';

export const history = createHistory();
const routeMiddleware = routerMiddleware(history);

const store = createStore(
    reducers,
    applyMiddleware(routeMiddleware, thunk)
);
store.subscribe(() => {
    console.log(store.getState());
});

items.map((item) => {
    store.dispatch(addStoreItem(item));
});
cart.map((item) => {
    store.dispatch(addItemAction(item));
});

store.dispatch(deployStoreContract());


export default store;
