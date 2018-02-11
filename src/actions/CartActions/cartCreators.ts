import { CartTypes } from './cartConstants';
import * as interfaces from './cartInterfaces';

export type TAddItemAction = typeof addItemAction;
export const addItemAction = (payload: interfaces.ICartItem): interfaces.IAddItemAction => {
    return { type: CartTypes.ADD_ITEM, payload };
};

export type TRemoveItemAction = typeof removeItemAction;
export const removeItemAction = (payload: interfaces.ICartItem): interfaces.IRemoveItemAction => {
    return { type: CartTypes.REMOVE_ITEM, payload };
};

export type TSetCartAmountAction = typeof setCartAmountAction;
export const setCartAmountAction = (payload: interfaces.ICartItem): interfaces.ISetCartAmountAction => {
    return { type: CartTypes.SET_AMOUNT, payload };
};
