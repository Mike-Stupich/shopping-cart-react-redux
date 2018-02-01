import { createStore } from 'redux';
import {addStoreItem, IStoreItem} from './actions/StoreActions';
import reducers from './reducers';

const item1: IStoreItem = {
    id: 1,
    name: 'First Item',
    stock: 5,
    image: require('./assets/background.jpg'),
    soldout: true
};

const item2: IStoreItem = {
    id: 2,
    name: 'Second Item',
    stock: 8,
    image: require('./assets/background.jpg'),
    soldout: true
};
const item3: IStoreItem = {
    id: 3,
    name: 'Third Item',
    stock: 2,
    image: require('./assets/background.jpg'),
    soldout: true
};

const item4: IStoreItem = {
    id: 4,
    name: 'Fourth Item',
    stock: 2,
    image: require('./assets/background.jpg'),
    soldout: true
};

const item5: IStoreItem = {
    id: 5,
    name: 'Fifth Item',
    stock: 0,
    image: require('./assets/background.jpg'),
    soldout: true
};

const store = createStore(reducers);
store.subscribe(() => {
     console.log(store.getState());
    });

store.dispatch(addStoreItem(item1));
store.dispatch(addStoreItem(item2));
store.dispatch(addStoreItem(item3));
store.dispatch(addStoreItem(item4));
store.dispatch(addStoreItem(item5));

export { store };
