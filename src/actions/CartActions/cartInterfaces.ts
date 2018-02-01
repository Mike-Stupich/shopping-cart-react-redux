export interface ICartItem {
    id: number;
    name: string;
    quantity: number;
}

export interface IAddItemAction {
    readonly type: 'ADD_ITEM';
    readonly payload: ICartItem;
}

export interface IRemoveItemAction {
    readonly type: 'REMOVE_ITEM';
    readonly payload: number;
}

export type TCartTypes = IAddItemAction | IRemoveItemAction;
