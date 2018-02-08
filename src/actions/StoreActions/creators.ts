import * as constants from './constants';
import * as interfaces from './interfaces';

export type TIncreaseStockAction = typeof increaseStockAction;
export const increaseStockAction = (payload: interfaces.IItemWithQuantity): interfaces.IIncreaseStockAction => {
    return { type: constants.INCREASE_STOCK, payload};
};
export type TDecreaseStockAction = typeof decreaseStockAction;
export const decreaseStockAction = (payload: interfaces.IItemWithQuantity): interfaces.IDecreaseStockAction => {
    return { type: constants.DECREASE_STOCK, payload};
};

export type TDisableProductAction = typeof disableProductAction;
export const disableProductAction = (payload: number): interfaces.IDisableProduct => {
    return { type: constants.DISABLE_PRODUCT, payload };
};

export type TAddStoreItem = typeof addStoreItem;
export const addStoreItem = (payload: interfaces.IItemFullData): interfaces.IAddStoreItem => {
    return { type: constants.ADD_STORE_ITEM, payload };
};
export type TRemoveStoreItem = typeof removeStoreItem;
export const removeStoreItem = (payload: number): interfaces.IRemoveStoreItem => {
    return { type: constants.REMOVE_STORE_ITEM, payload };
};
