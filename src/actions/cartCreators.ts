import * as constants from './cartConstants';
import * as interfaces from './cartInterfaces';

export const AddItemAction = (payload: interfaces.IItem): interfaces.IAddItemAction => {
    return { type: constants.ADD_ITEM, payload };
};

export const RemoveItemAction = (payload: number): interfaces.IRemoveItemAction => {
    return { type: constants.REMOVE_ITEM, payload };
};
