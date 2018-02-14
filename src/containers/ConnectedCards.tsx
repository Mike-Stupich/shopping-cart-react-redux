import { connect } from 'react-redux';
import {
  addItemAction as dAddItemAction,
  TAddItemAction,
} from '../actions/CartActions';
import {
  decreaseStockAction as dDecreaseStockAction,
  IItemFullData,
  TDecreaseStockAction,
} from '../actions/StoreActions';
import ItemGrid from '../components/Browse/ItemGrid';
import { IAppState } from '../reducers';

// tslint:disable:array-type
export interface IStateProps {
  items: IItemFullData[];
  index: number;
}

export interface IDispatchProps {
  addItemAction: TAddItemAction;
  decreaseStockAction: TDecreaseStockAction;
}

const checkIfSoldOut = (storeItems: IItemFullData[]): IItemFullData[] => {
  if (!storeItems) {
    return [];
  }
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
    items: checkIfSoldOut(state.modifyStore.localStock),
    index: state.modifyStore.itemIndex
  };
};

const ConnectedCards = connect(mapStateToProps, {
  addItemAction: dAddItemAction,
  decreaseStockAction: dDecreaseStockAction,
})(ItemGrid);

export default ConnectedCards;
