import { ICartItem } from '../CartActions';
import { CheckoutTypes } from './constants';
import * as interfaces from './interfaces';

export type TRemoveItem = typeof removeItem;
export const removeItem = (payload: ICartItem): interfaces.IRemoveItem => {
  return { type: CheckoutTypes.REMOVE_ITEM, payload };
};

export type TSetAmount = typeof setAmount;
export const setAmount = (payload: ICartItem): interfaces.ISetAmount => {
  return { type: CheckoutTypes.SET_AMOUNT, payload };
};
