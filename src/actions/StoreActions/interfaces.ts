export interface IStoreItem {
    id: number;
    name: string;
    image: any;
    stock: number;
    soldout: boolean;
}

export interface IIncreaseStockAction {
    readonly type: 'INCREASE_STOCK';
    readonly payload: {
        id: number,
        amount: number
    };
}

export interface IDecreaseStockAction {
    readonly type: 'DECREASE_STOCK';
    readonly payload: {
        id: number,
        amount: number
    };
}

export interface IDisableProduct {
    readonly type: 'DISABLE_PRODUCT';
    readonly payload: number;
}

export interface IAddStoreItem {
    readonly type: 'ADD_STORE_ITEM';
    readonly payload: IStoreItem;
}

export interface IRemoveStoreItem {
    readonly type: 'REMOVE_STORE_ITEM';
    readonly payload: number;
}

export type TStoreTypes =
| IIncreaseStockAction
| IDecreaseStockAction
| IDisableProduct
| IAddStoreItem
| IRemoveStoreItem;
