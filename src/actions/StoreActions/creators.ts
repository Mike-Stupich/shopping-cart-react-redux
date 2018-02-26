import { BigNumber } from 'bignumber.js';
import { Dispatch } from 'redux';
import { ICartItem } from '../CartActions/cartInterfaces';
import { StoreTypes } from './constants';
import * as interfaces from './interfaces';

import { IState } from '../../reducers/storeReducerW3';

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

export type TGetItem = typeof getItem;
export const getItem = (payload: number): interfaces.GetItem => {
    return { type: StoreTypes.GET_ITEM, payload };
};

export type TGetContractItem = typeof getItemFromContract;
export const getItemFromContract = (payload: number) => {
    return (dispatch: Dispatch<any>, getState: any) => {
        const state = getState();
        return getContractItem(state.modifyStore, payload).then(
            (item: [string, string, BigNumber, string]) => {
                // This should be done somewhere else
                if (item[0] === '') {
                    return;
                }
                const fulldata: interfaces.IItemFullData = {
                    id: payload,
                    name: item[0],
                    image: item[3],
                    stock: item[2].toNumber(),
                    description: item[1],
                    soldout: false
                };
                dispatch(addToLocalItems(fulldata));
            });
    };
};

const addToLocalItems = (payload: interfaces.IItemFullData) => {
    return { type: StoreTypes.ADD_TO_LOCAL_ITEMS, payload };
};

const getContractItem = (state: IState, id: number): Promise<any> => {
    const contract = state.storeContract!;
    const foundItem = contract.then((store) => {
        return store.storeItems(id);
    });
    console.log(foundItem);
    return foundItem;
};

export type TNewStore = typeof newStore;
export const newStore = (): interfaces.NewStore => {
    return { type: StoreTypes.NEW_STORE };
};

export type TSetIndex = typeof setIndex;
export const setIndex = (payload: number) => {
    return { type: StoreTypes.SET_INDEX, payload };
};

