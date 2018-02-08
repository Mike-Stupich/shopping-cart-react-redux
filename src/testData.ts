import { ICartItem } from './actions/CartActions';
import { IStoreItem } from './actions/StoreActions';

// Dummy data to see what I'm doing
const items: IStoreItem[] = [
    {
        id: 1,
        name: 'Pants',
        stock: 5,
        image: require('./assets/1.jpg'),
        soldout: false
    },
    {
        id: 2,
        name: 'Hat',
        stock: 8,
        image: require('./assets/2.jpg'),
        soldout: false
    },
    {
        id: 3,
        name: 'Gloves',
        stock: 2,
        image: require('./assets/3.jpg'),
        soldout: false
    },
    {
        id: 4,
        name: 'Mitts',
        stock: 2,
        image: require('./assets/4.jpg'),
        soldout: false
    },
    {
        id: 5,
        name: 'Wallet',
        stock: 0,
        image: require('./assets/5.jpg'),
        soldout: true
    },
    {
        id: 6,
        name: 'Shirt',
        stock: 4,
        image: require('./assets/6.jpg'),
        soldout: false
    },
    {
        id: 7,
        name: 'Socks',
        stock: 2,
        image: require('./assets/7.jpg'),
        soldout: false
    },
    {
        id: 8,
        name: 'Shoes',
        stock: 4,
        image: require('./assets/8.jpg'),
        soldout: false
    },
    // {
    //     id: 5,
    //     name: 'Fifth Item',
    //     stock: 0,
    //     image: require('./assets/background.jpg'),
    //     soldout: true
    // }
];
const cart: ICartItem[] = [
    {
        id: 7,
        name: 'Socks',
        quantity: 1
    },
];
export { cart, items };
