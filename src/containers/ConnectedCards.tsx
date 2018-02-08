import { connect } from 'react-redux';
import { addItemAction as dAddItemAction, TAddItemAction } from '../actions/CartActions';
import { decreaseStockAction as dDecreaseStockAction, IStoreItem, TDecreaseStockAction } from '../actions/StoreActions';
import ItemGrid from '../components/Browse/ItemGrid';
import { IAppState } from '../reducers';

export interface IStateProps {
    items: IStoreItem[];
}

export interface IDispatchProps {
    addItemAction: TAddItemAction;
    decreaseStockAction: TDecreaseStockAction;
}

const checkIfSoldOut = (storeItems: IStoreItem[]): IStoreItem[] => {
    const checkedItems = storeItems.map((item) => {
        if (item.stock === 0) {
            item.soldout = true;
        }
        return item;
    });
    return checkedItems;
};

const mapStateToProps = (state: IAppState): IStateProps => {
    return {
        items: checkIfSoldOut(state.modifyStore.stock)
    };
};

const ConnectedCards = connect(mapStateToProps, {
    addItemAction: dAddItemAction,
    decreaseStockAction: dDecreaseStockAction
})(ItemGrid);

export default ConnectedCards;
