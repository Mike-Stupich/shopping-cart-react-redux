import * as constants from './cartConstants';
import * as interfaces from './cartInterfaces';

export type TAddItemAction = typeof addItemAction;
export const addItemAction = (payload: interfaces.ICartItem): interfaces.IAddItemAction => {
    return { type: constants.ADD_ITEM, payload };
};

export type TRemoveItemAction = typeof removeItemAction;
export const removeItemAction = (payload: number): interfaces.IRemoveItemAction => {
    return { type: constants.REMOVE_ITEM, payload };
};
