import * as cartActions from '../actions/CartActions';

export interface IState {
    user: string;
    cart: cartActions.ICartItemWithQuantity[];
}

export const INITIAL_STATE: IState = {
    user: 'Guest',
    cart: [],
};

const addItemToCart = (state: IState, action: cartActions.IAddItemAction): IState => {
    let found = false;
    const { item, amount } = action.payload;
    state.cart.map((i) => {
        if (i.item.id === item.id) {
            found = true;
        }
    });
    if (found) {
        item.quantity += amount;
    }
    return {
        ...state,
        cart: [
            ...state.cart,
            {
                item,
                amount
            }
        ]
    };
};

const removeItemFromCart = (state: IState, action: cartActions.IRemoveItemAction): IState => {
    const { id } = action.payload; // TODO: Decrease by amount
    return {
        ...state,
        cart: [...state.cart.filter((i) =>
            (i.item.id !== id))
        ]
    };
};

const setItemAmount = (state: IState, action: cartActions.ISetCartAmountAction): IState => {
    const { id, amount } = action.payload;
    if (amount < 0) {
        return state;
    }
    return {
        ...state,
        cart: [
            ...state.cart.map((i) => {
                if (id === i.item.id) {
                    i.amount = amount;
                }
                return i;
            })
        ]
    };
};

export const modifyCart = (state: IState = INITIAL_STATE, action: cartActions.TCartTypes): IState => {
    switch (action.type) {
        case cartActions.CartTypes.ADD_ITEM:
            return addItemToCart(state, action);
        case cartActions.CartTypes.REMOVE_ITEM:
            return removeItemFromCart(state, action);
        case cartActions.CartTypes.SET_AMOUNT:
            return setItemAmount(state, action);
        default:
            return state;
    }
};
