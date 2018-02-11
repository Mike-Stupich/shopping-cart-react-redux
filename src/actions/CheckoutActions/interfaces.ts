import { ICartItem } from '../CartActions/cartInterfaces';
import { CheckoutTypes } from './constants';

export interface IRemoveItem {
  readonly type: CheckoutTypes.REMOVE_ITEM;
  readonly payload: ICartItem;
}

export interface ISetAmount {
  readonly type: CheckoutTypes.SET_AMOUNT;
  readonly payload: ICartItem;
}

export type TCheckoutTypes =
  | IRemoveItem
  | ISetAmount;
