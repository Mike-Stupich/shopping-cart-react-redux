import { CartTypes } from './cartConstants';

// Item Interfaces for the Cart
export interface ICartItem {
    id: number;
    name: string;
    quantity: number;
}

export interface IItemWithQuantity {
    id: number;
    amount: number;
}

export interface ICartItemWithQuantity {
    item: ICartItem;
    amount: number;
}

// Cart Action Interfaces
export interface IAddItemAction {
    readonly type: CartTypes.ADD_ITEM;
    readonly payload: ICartItemWithQuantity;
}

export interface IRemoveItemAction {
    readonly type: CartTypes.REMOVE_ITEM;
    readonly payload: IItemWithQuantity;
}

export interface ISetCartAmountAction {
    readonly type: CartTypes.SET_AMOUNT;
    readonly payload: IItemWithQuantity;
}

export type TCartTypes = IAddItemAction
    | IRemoveItemAction
    | ISetCartAmountAction;
