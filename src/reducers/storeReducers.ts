import * as storeActions from '../actions/StoreActions';

export interface IState {
    stock: storeActions.IStoreItem[];
}

export const INITIAL_STATE: IState = {
    stock: []
};

const increaseItemStock = (state: IState, action: storeActions.IIncreaseStockAction): IState => {
    const newStock = state.stock.map((curr) => {
        if (curr.id === action.payload.id) {
            return {
                id: curr.id,
                name: curr.name,
                stock: curr.stock + action.payload.amount,
                image: curr.image,
                soldout: curr.soldout
            };
        }
        return curr;
    });
    return {
        ...state,
        stock: newStock
    };
};

const decreaseItemStock = (state: IState, action: storeActions.IDecreaseStockAction): IState => {
    const newStock = state.stock.map((curr) => {
        if (curr.id === action.payload.id) {
            return {
                id: curr.id,
                name: curr.name,
                stock: curr.stock - action.payload.amount,
                image: curr.image,
                soldout: curr.soldout
            };
        }
        return curr;
    });
    return {
        ...state,
        stock: newStock
    };
};

const disableProduct = (state: IState, action: storeActions.IDisableProduct): IState => {
    const newStock = state.stock.map((curr) => {
        if (curr.id === action.payload) {
            return {
                id: curr.id,
                name: curr.name,
                stock: curr.stock,
                image: curr.image,
                soldout: false,
            };
        }
        return curr;
    });
    return {
        ...state,
        stock: newStock
    };
};

const addStoreItem = (state: IState, action: storeActions.IAddStoreItem): IState => {
    return {
        ...state,
        stock: [
            ...state.stock,
            action.payload
        ]
    };
};

const removeStoreItem = (state: IState, action: storeActions.IRemoveStoreItem): IState => {
    return {
        ...state,
        stock: [
            ...state.stock.filter((item) => (item.id !== action.payload))
        ]
    };
};

export const modifyStore = (state: IState = INITIAL_STATE, action: storeActions.TStoreTypes): IState => {
    switch (action.type) {
        case storeActions.INCREASE_STOCK:
            return increaseItemStock(state, action);
        case storeActions.DECREASE_STOCK:
            return decreaseItemStock(state, action);
        case storeActions.DISABLE_PRODUCT:
            return disableProduct(state, action);
        case storeActions.ADD_STORE_ITEM:
            return addStoreItem(state, action);
        case storeActions.REMOVE_STORE_ITEM:
            return removeStoreItem(state, action);
        default:
            return state;
    }
};
