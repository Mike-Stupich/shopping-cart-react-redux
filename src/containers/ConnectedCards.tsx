import { connect } from 'react-redux';
import { addItemAction as dAddItemAction, TAddItemAction } from '../actions/CartActions';
import { IStoreItem } from '../actions/StoreActions';
import ItemGrid from '../components/ItemGrid';
import { IAppState } from '../reducers';

export interface IStateProps {
    items: IStoreItem[];
}

export interface IDispatchProps {
    addItemAction: TAddItemAction;
    // disableProductAction: TdisableProductAction;
}

// const getItemQuantity = (allItems: IStoreItem[], ownProps: IStoreItem[]) => {
//     const itemsWithQuantity: IStoreItem[] = ownProps.map((item, index) => {
//         const found = allItems.find((i) => (item.id === i.id));
//         if (found) {
//             return { ...item, stock: found.stock };
//         }
//         return { ...item };
//     });
//     return itemsWithQuantity;
// };

const checkIfSoldOut = (storeItems: IStoreItem[]): IStoreItem[]  => {
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
    addItemAction: dAddItemAction
})(ItemGrid);

export default ConnectedCards;
