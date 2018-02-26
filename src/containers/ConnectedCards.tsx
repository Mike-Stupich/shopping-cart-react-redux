import { connect } from 'react-redux';
import {
  addItemAction as dAddItemAction,
  TAddItemAction,
} from '../actions/CartActions';
import {
  decreaseStockAction as dDecreaseStockAction,
  getItem as dGetItem,
  getItemFromContract as dGetItemFromContract,
  IItemFullData,
  TDecreaseStockAction,
  TGetContractItem,
  TGetItem,
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
  getItemFromContract: TGetContractItem;
  getItem: TGetItem;
}

// const checkIfSoldOut = (storeItems: IItemFullData[]): IItemFullData[] => {
//   if (!storeItems) {
//     return [];
//   }
//   const checkedItems = storeItems.map((item) => {
//     if (item.stock === 0) {
//       item.soldout = true;
//     }
//     return item;
//   });
//   return checkedItems;
// };

// const loadItems = (state: IAppState): IItemFullData[] => {
//   const item: IItemFullData = state.modifyStore.storeContract!.then((store) => {
//     return store.storeItems(1);
//   });
//   const allItems = state.modifyStore.localStock;
//   allItems.push(item);
//   return state.modifyStore.localStock;
// };

const mapStateToProps = (state: IAppState): IStateProps => {
  return {
    // items: checkIfSoldOut(state.modifyStore.localStock),
    index: state.modifyStore.itemIndex,
    items: state.modifyStore.localStock
    // items: state.modifyStore.localStock
  };
};

const ConnectedCards = connect(mapStateToProps, {
  addItemAction: dAddItemAction,
  decreaseStockAction: dDecreaseStockAction,
  getItemFromContract: dGetItemFromContract,
  getItem: dGetItem,
})(ItemGrid);

export default ConnectedCards;
