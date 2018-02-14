import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { getDeployedStore, getItems } from './actions/StoreActions';
import reducers from './reducers';

export const history = createHistory();
const routeMiddleware = routerMiddleware(history);
const ContractAddress = '0xbd2c938b9f6bfc1a66368d08cb44dc3eb2ae27be';

const store = createStore(
    reducers,
    applyMiddleware(routeMiddleware, thunk)
);

store.subscribe(() => {
    const state: any = store.getState();
    console.log(state);
});

store.dispatch(getDeployedStore(ContractAddress));
store.dispatch(getItems(1));

export default store;
