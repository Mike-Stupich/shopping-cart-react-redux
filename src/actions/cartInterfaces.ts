export interface IItem {
    id: number;
    name: string;
}

export interface IAddItemAction {
    type: 'ADD_ITEM';
    payload: IItem;
}

export interface IRemoveItemAction {
    type: 'REMOVE_ITEM';
    payload: number;
}

export type TCartTypes = IAddItemAction | IRemoveItemAction;
