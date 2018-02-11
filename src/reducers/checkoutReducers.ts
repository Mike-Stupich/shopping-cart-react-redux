// import { ICartItem } from '../actions/CartActions/cartInterfaces';
import * as CheckoutActions from '../actions/CheckoutActions';
export interface IState {
  temp: string;
}

export const INITIAL_STATE = {
  temp: 'temp'
};

export const modifyCheckout = (state: IState = INITIAL_STATE, action: CheckoutActions.TCheckoutTypes): IState => {
  switch (action.type) {
    default:
      return state;
  }
};
