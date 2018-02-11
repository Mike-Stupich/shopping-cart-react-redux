import * as storeActions from '../actions/StoreActions';

export interface IState {
    stock: storeActions.IItemFullData[];
    modal: storeActions.IModal | null;
}

export const INITIAL_STATE: IState = {
    stock: [],
    modal: null
};

const increaseItemStock = (state: IState, action: storeActions.IIncreaseStockAction): IState => {
    const { item, amount } = action.payload;
    const newStock = state.stock.map((curr) => {
        if (curr.id === item.id) {
            return {
                id: curr.id,
                name: curr.name,
                stock: curr.stock + amount,
                image: curr.image,
                soldout: curr.soldout,
                description: curr.description,
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
    const { item, amount } = action.payload;
    const newStock = state.stock.map((curr) => {
        if (curr.id === item.id) {
            return {
                id: curr.id,
                name: curr.name,
                stock: curr.stock - amount,
                image: curr.image,
                soldout: curr.soldout,
                description: curr.description,
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
                description: curr.description
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

const displayModal = (state: IState, action: storeActions.IDisplayModalAction): IState => {
    return {
        ...state,
        modal: action.payload
    };
};

const addModal = (state: IState, action: storeActions.IAddModalAction): IState => {
    return {
        ...state,
        modal: action.payload
    };
};

export const modifyStore = (state: IState = INITIAL_STATE, action: storeActions.TStoreTypes): IState => {
    switch (action.type) {
        case storeActions.StoreTypes.INCREASE_STOCK:
            return increaseItemStock(state, action);
        case storeActions.StoreTypes.DECREASE_STOCK:
            return decreaseItemStock(state, action);
        case storeActions.StoreTypes.DISABLE_PRODUCT:
            return disableProduct(state, action);
        case storeActions.StoreTypes.ADD_STORE_ITEM:
            return addStoreItem(state, action);
        case storeActions.StoreTypes.REMOVE_STORE_ITEM:
            return removeStoreItem(state, action);
        case storeActions.StoreTypes.SHOW_MODAL:
            return displayModal(state, action);
        case storeActions.StoreTypes.ADD_MODAL:
            return addModal(state, action);
        default:
            return state;
    }
};
