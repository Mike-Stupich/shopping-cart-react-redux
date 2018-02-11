import { ICartItem } from './actions/CartActions';
import { IItemFullData, IModal } from './actions/StoreActions';

// Dummy data to see what I'm doing
const items: IItemFullData[] = [
    {
        id: 1,
        name: 'Pants',
        stock: 5,
        image: require('./assets/1.jpg'),
        description: `Fancy Pants`,
        soldout: false
    },
    {
        id: 2,
        name: 'Hat',
        stock: 8,
        image: require('./assets/2.jpg'),
        description: `Slick Hat`,
        soldout: false
    },
    {
        id: 3,
        name: 'Gloves',
        stock: 2,
        image: require('./assets/3.jpg'),
        description: `Gloves ooo`,
        soldout: false
    },
    {
        id: 4,
        name: 'Mitts',
        stock: 2,
        image: require('./assets/4.jpg'),
        description: `Mittens`,
        soldout: false
    },
    {
        id: 5,
        name: 'Wallet',
        stock: 0,
        image: require('./assets/5.jpg'),
        description: `Wallet`,
        soldout: true
    },
    {
        id: 6,
        name: 'Shirt',
        stock: 4,
        image: require('./assets/6.jpg'),
        description: `Shirts wow`,
        soldout: false
    },
    {
        id: 7,
        name: 'Socks',
        stock: 2,
        image: require('./assets/7.jpg'),
        soldout: false,
        description: `Socks are cool`
    },
    {
        id: 8,
        name: 'Shoes',
        stock: 4,
        image: require('./assets/8.jpg'),
        description: `Shoes are cool`,
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
        item: {
            id: 7,
            name: 'Socks',
            stock: 2,
            image: require('./assets/7.jpg'),
            soldout: false,
            description: `Socks are cool`
        },
        amount: 1
    }
];

const modal: IModal = {
    item: {
        id: 8,
        name: 'Shoes',
        stock: 4,
        image: require('./assets/8.jpg'),
        description: `Shoes are cool`,
        soldout: false
    },
    visibility: false
};
export { cart, items, modal};
