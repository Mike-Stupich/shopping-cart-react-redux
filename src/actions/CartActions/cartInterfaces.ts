import { IItemFullData } from '../StoreActions/interfaces';
import { CartTypes } from './cartConstants';
// Item Interfaces for the Cart

export interface ICartItem {
    item: IItemFullData;
    amount: number;
}

// Cart Action Interfaces
export interface IAddItemAction {
    readonly type: CartTypes.ADD_ITEM;
    readonly payload: ICartItem;
}

export interface IRemoveItemAction {
    readonly type: CartTypes.REMOVE_ITEM;
    readonly payload: ICartItem;
}

export interface ISetCartAmountAction {
    readonly type: CartTypes.SET_AMOUNT;
    readonly payload: ICartItem;
}

export type TCartTypes = IAddItemAction
    | IRemoveItemAction
    | ISetCartAmountAction;
