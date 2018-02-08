import { connect } from 'react-redux';

import {
    addItemAction as dAddItemAction,
    ICartItemWithQuantity,
    removeItemAction as dRemoveItemAction,
    setCartAmountAction as dSetCartAmountAction,
    TAddItemAction,
    TRemoveItemAction,
    TSetCartAmountAction
} from '../actions/CartActions';
import CartDisplay from '../components/Cart/CartDisplay';
import { IAppState } from '../reducers';

export interface IStateProps {
    cartItems: ICartItemWithQuantity[];
}

export interface IDispatchProps {
    addItemAction: TAddItemAction;
    removeFromCart: TRemoveItemAction;
    setCartAmountAction: TSetCartAmountAction;
}

const mapStateToProps = (state: IAppState): IStateProps => {
    return {
        cartItems: state.modifyCart.cart
    };
};

export default connect(
    mapStateToProps,
    {
        addItemAction: dAddItemAction,
        removeFromCart: dRemoveItemAction,
        setCartAmountAction: dSetCartAmountAction
    }
)(CartDisplay);
