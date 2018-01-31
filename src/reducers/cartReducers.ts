import * as cartActions from '../actions';

export interface IState {
    user: string;
    cart: cartActions.IItem[];
}

export const INITIAL_STATE: IState = {
    user: 'Guest',
    cart: [],
};

const addItemToCart = (state: IState = INITIAL_STATE, action: cartActions.IAddItemAction): IState => {
    return {
        ...state,
        cart: [
            ...state.cart,
            action.payload
        ]
    };
};

const removeItemFromCart = (state: IState = INITIAL_STATE, action: cartActions.IRemoveItemAction): IState => {
    return {
        ...state,
        cart: [...state.cart.filter((item) =>
            (item.id !== action.payload))
        ]
    };
};

export const modifyCart = (state: IState = INITIAL_STATE, action: cartActions.TCartTypes): IState => {
    switch (action.type) {
        case cartActions.ADD_ITEM:
            return addItemToCart(state, action);
        case cartActions.REMOVE_ITEM:
            return removeItemFromCart(state, action);
        default:
            return state;
    }
};
