import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
// import { addItemAction } from './actions/CartActions';
import { addStoreItem, getDeployedStore } from './actions/StoreActions';
import reducers from './reducers';
// import { cart, items } from './testData';

export const history = createHistory();
const routeMiddleware = routerMiddleware(history);
const ContractAddress = '0xbd2c938b9f6bfc1a66368d08cb44dc3eb2ae27be';

const store = createStore(
    reducers,
    applyMiddleware(routeMiddleware, thunk)
);

store.subscribe(() => {
    const state: any = store.getState();
    console.log(state.modifyStore.state);
});

const item = {
    id: 4,
    name: 'Mitts',
    stock: 2,
    image: require('./assets/4.jpg'),
    description: `Mittens`,
    soldout: false
};
store.dispatch(getDeployedStore(ContractAddress));
store.dispatch(addStoreItem(item));


// items.map((item) => {
//     store.dispatch(addStoreItem(item));
// });
// cart.map((item) => {
//     store.dispatch(addItemAction(item));
// });



export default store;
