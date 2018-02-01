import * as cartActions from '../actions/CartActions';

export interface IState {
    user: string;
    cart: cartActions.ICartItem[];
}

export const INITIAL_STATE: IState = {
    user: 'Guest',
    cart: [],
};

const addItemToCart = (state: IState = INITIAL_STATE, action: cartActions.IAddItemAction): IState => {
    let found = false;
    state.cart.map((i) => {
        if (i.id === action.payload.id) {
            found = true;
        }
    });
    const payload = action.payload;
    if (found) {
        payload.quantity += action.payload.quantity;
    }
    return {
        ...state,
        cart: [
            ...state.cart,
            payload
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
