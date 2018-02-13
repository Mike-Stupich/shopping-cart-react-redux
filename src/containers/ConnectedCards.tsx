import { connect } from 'react-redux';
import {
  addItemAction as dAddItemAction,
  TAddItemAction,
} from '../actions/CartActions';
import {
  decreaseStockAction as dDecreaseStockAction,
  IItemFullDataWithTx,
  TDecreaseStockAction,
} from '../actions/StoreActions';
import ItemGrid from '../components/Browse/ItemGrid';
import { IAppState } from '../reducers';

// tslint:disable:array-type
export interface IStateProps {
  items: IItemFullDataWithTx[];
}

export interface IDispatchProps {
  addItemAction: TAddItemAction;
  decreaseStockAction: TDecreaseStockAction;
}

const checkIfSoldOut = (storeItems: IItemFullDataWithTx[]): IItemFullDataWithTx[] => {
  if (!storeItems) {
    return [];
  }
  const checkedItems = storeItems.map((item) => {
    if (item.storeItem.stock === 0) {
      item.storeItem.soldout = true;
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
  decreaseStockAction: dDecreaseStockAction,
})(ItemGrid);

export default ConnectedCards;
