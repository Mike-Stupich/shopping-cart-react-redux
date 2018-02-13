// import { ThunkAction } from 'redux-thunk';
import { ICartItem } from '../CartActions/cartInterfaces';
import { StoreTypes } from './constants';
import * as interfaces from './interfaces';

export type TIncreaseStockAction = typeof increaseStockAction;
export const increaseStockAction = (payload: ICartItem): interfaces.IIncreaseStockAction => {
    return { type: StoreTypes.INCREASE_STOCK, payload };
};
export type TDecreaseStockAction = typeof decreaseStockAction;
export const decreaseStockAction = (payload: ICartItem): interfaces.IDecreaseStockAction => {
    return { type: StoreTypes.DECREASE_STOCK, payload };
};

export type TDisableProductAction = typeof disableProductAction;
export const disableProductAction = (payload: number): interfaces.IDisableProduct => {
    return { type: StoreTypes.DISABLE_PRODUCT, payload };
};

export type TAddStoreItem = typeof addStoreItem;
export const addStoreItem = (payload: interfaces.IItemFullData) => {
    return { type: StoreTypes.ADD_STORE_ITEM, payload };
};
export type TRemoveStoreItem = typeof removeStoreItem;
export const removeStoreItem = (payload: number): interfaces.IRemoveStoreItem => {
    return { type: StoreTypes.REMOVE_STORE_ITEM, payload };
};

export type TIncrementIndex = typeof incrementIndex;
export const incrementIndex = (): interfaces.IIncrementIndex => {
    return { type: StoreTypes.INCREMENT_INDEX };
};

export type TRequestItems = typeof requestItems;
export const requestItems = (): interfaces.RequestItems => {
    return { type: StoreTypes.REQUEST_ITEMS };
};

export type TGetDeployedStore = typeof getDeployedStore;
export const getDeployedStore = (payload: string): interfaces.GetDeployedStore => {
  return { type: StoreTypes.GET_DEPLOYED_STORE, payload };
};

// export type TReceiveItems = typeof receiveItems;
// export const receiveItems: ActionCreator<ThunkAction<Promise<Action>,
// state, void>> = () => {
//     return async (dispatch: Dispatch<)

// };
