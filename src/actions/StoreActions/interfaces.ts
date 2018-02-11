import { ICartItem } from '../CartActions/cartInterfaces';
import { StoreTypes } from './constants';
export interface IItemFullData {
    id: number;
    name: string;
    image: any;
    stock: number;
    description?: string;
    soldout: boolean;
}

export interface IModal {
    item: IItemFullData;
    visibility: boolean;
}

export interface IIncreaseStockAction {
    readonly type: StoreTypes.INCREASE_STOCK;
    readonly payload: ICartItem;
}

export interface IDecreaseStockAction {
    readonly type: StoreTypes.DECREASE_STOCK;
    readonly payload: ICartItem;
}

export interface IDisableProduct {
    readonly type: StoreTypes.DISABLE_PRODUCT;
    readonly payload: number;
}

export interface IAddStoreItem {
    readonly type: StoreTypes.ADD_STORE_ITEM;
    readonly payload: IItemFullData;
}

export interface IRemoveStoreItem {
    readonly type: StoreTypes.REMOVE_STORE_ITEM;
    readonly payload: number;
}

export interface IDisplayModalAction {
    readonly type: StoreTypes.SHOW_MODAL;
    readonly payload: IModal;
}

export interface IAddModalAction {
    readonly type: StoreTypes.ADD_MODAL;
    readonly payload: IModal;
}

export type TStoreTypes =
    | IIncreaseStockAction
    | IDecreaseStockAction
    | IDisableProduct
    | IAddStoreItem
    | IRemoveStoreItem
    | IDisplayModalAction
    | IAddModalAction;
