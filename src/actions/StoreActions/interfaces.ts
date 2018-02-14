import { W3 } from 'soltsice';
import { ICartItem } from '../CartActions/cartInterfaces';
import { StoreTypes } from './constants';
export interface IItemFullData {
    id: number;
    name: string;
    image: any;
    stock: number;
    description: string;
    soldout: boolean;
}

export interface IModal {
    item: IItemFullData;
    visibility: boolean;
}

export interface IItemFullDataWithTx {
    storeItem: IItemFullData;
    tx: Promise<W3.TX.TransactionResult>;
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

export interface IIncrementIndex {
    readonly type: StoreTypes.INCREMENT_INDEX;
}

export interface RequestItems {
    readonly type: StoreTypes.REQUEST_ITEMS;
}

export interface ReceiveItems {
    readonly type: StoreTypes.RECEIVE_ITEMS;
    readonly payload: () => IItemFullData[];
}

export interface GetDeployedStore {
    readonly type: StoreTypes.GET_DEPLOYED_STORE;
    readonly payload: string;
  }
export interface NewStore {
    readonly type: StoreTypes.NEW_STORE;
    readonly payload: string;
}

export interface GetItem {
    readonly type: StoreTypes.GET_ITEM;
    readonly payload: number;
}

export type TStoreTypes =
    | IIncreaseStockAction
    | IDecreaseStockAction
    | IDisableProduct
    | IAddStoreItem
    | IRemoveStoreItem
    | IIncrementIndex
    | RequestItems
    | ReceiveItems
    | GetDeployedStore
    | GetItem
    | NewStore
;
