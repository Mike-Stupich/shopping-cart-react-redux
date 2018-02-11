import * as cartActions from '../actions/CartActions';

export interface IState {
    user: string;
    cart: cartActions.ICartItem[];
}

export const INITIAL_STATE: IState = {
    user: 'Guest',
    cart: [],
};

const addItemToCart = (state: IState, action: cartActions.IAddItemAction): IState => {
    const { item, amount } = action.payload;
    console.log(action.payload);
    const cartCopy = state.cart;
    let found = false;
    let newCart;
    const itemInCart = cartCopy.map((i) => {
        if (i.item.id === item.id) {
            found = true;
            return {item: i.item, amount: i.amount + amount};
        }
        return i;
    });

    if (found) {
        newCart = [
            ...itemInCart
        ];
    } else {
        newCart = [
            ...itemInCart,
            {
                item,
                amount
            }
        ];
    }

    return {
        ...state,
        cart: newCart
    };
};

const removeItemFromCart = (state: IState, action: cartActions.IRemoveItemAction): IState => {
    const { id } = action.payload.item; // TODO: Decrease by amount
    return {
        ...state,
        cart: [...state.cart.filter((i) =>
            (i.item.id !== id))
        ]
    };
};

const setItemAmount = (state: IState, action: cartActions.ISetCartAmountAction): IState => {
    const { item: cartItem, amount } = action.payload;
    if (amount < 0) {
        return state;
    }
    return {
        ...state,
        cart: [
            ...state.cart.map((i) => {
                if (cartItem.id === i.item.id) {
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
