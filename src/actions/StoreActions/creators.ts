import {ICartItem } from '../CartActions/cartInterfaces';
import {StoreTypes} from './constants';
import * as interfaces from './interfaces';

export type TIncreaseStockAction = typeof increaseStockAction;
export const increaseStockAction = (payload: ICartItem): interfaces.IIncreaseStockAction => {
    return { type: StoreTypes.INCREASE_STOCK, payload};
};
export type TDecreaseStockAction = typeof decreaseStockAction;
export const decreaseStockAction = (payload: ICartItem): interfaces.IDecreaseStockAction => {
    return { type: StoreTypes.DECREASE_STOCK, payload};
};

export type TDisableProductAction = typeof disableProductAction;
export const disableProductAction = (payload: number): interfaces.IDisableProduct => {
    return { type: StoreTypes.DISABLE_PRODUCT, payload };
};

export type TAddStoreItem = typeof addStoreItem;
export const addStoreItem = (payload: interfaces.IItemFullData): interfaces.IAddStoreItem => {
    return { type: StoreTypes.ADD_STORE_ITEM, payload };
};
export type TRemoveStoreItem = typeof removeStoreItem;
export const removeStoreItem = (payload: number): interfaces.IRemoveStoreItem => {
    return { type: StoreTypes.REMOVE_STORE_ITEM, payload };
};

export type TDisplayModalAction = typeof displayModalAction;
export const displayModalAction = (payload: interfaces.IModal): interfaces.IDisplayModalAction => {
    return { type: StoreTypes.SHOW_MODAL, payload };
};

export type TAddModalAction = typeof addModalAction;
export const addModalAction = (payload: interfaces.IModal): interfaces.IAddModalAction => {
    return { type: StoreTypes.ADD_MODAL, payload };
};
