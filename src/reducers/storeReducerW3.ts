import { W3 } from 'soltsice';
import * as storeActions from '../actions/StoreActions';
import * as Web3Actions from '../actions/Web3Actions';
import { Store } from '../typedContracts';

// const storeAbi = require('../contracts/build/contracts/Store.json');
const DEFAULT_PROVIDER = new W3.providers.HttpProvider('http://localhost:7545');

export interface IState {
    stock: storeActions.IItemFullData[];
    web3: W3;
    storeContract: Promise<Store> | Store | null;
    storeContractAddress: string | null;
}

export const INITIAL_STATE: IState = {
    stock: [],
    web3: W3.Default = new W3(),
    storeContract: null,
    storeContractAddress: null
};

// Not useful right now... W3() gets injected web provider
const createNewInstance = (state: IState, action: Web3Actions.CreateInstance): IState => {
    const prov = action.payload
      ? new W3.providers.HttpProvider(action.payload)
      : DEFAULT_PROVIDER;
    return {
        ...state,
        web3: new W3(prov)
    };
  };


const deployStoreContract = (state: IState, action: Web3Actions.DeployStore): IState => {
    const store = state.web3.accounts.then((accounts: string[]) =>
        Store.New(W3.TX.txParamsDefaultDeploy(accounts[0]), {}, state.web3));

    return {
        ...state,
        storeContract: store
    };
};

const increaseItemStock = (state: IState, action: storeActions.IIncreaseStockAction): IState => {
    const { item, amount } = action.payload;
    const newStock = state.stock.map((curr) => {
        if (curr.id === item.id) {
            return {
                id: curr.id,
                name: curr.name,
                stock: curr.stock + amount,
                image: curr.image,
                soldout: curr.soldout,
                description: curr.description,
            };
        }
        return curr;
    });
    return {
        ...state,
        stock: newStock
    };
};

const decreaseItemStock = (state: IState, action: storeActions.IDecreaseStockAction): IState => {
    const { item, amount } = action.payload;
    const newStock = state.stock.map((curr) => {
        if (curr.id === item.id) {
            return {
                id: curr.id,
                name: curr.name,
                stock: curr.stock - amount,
                image: curr.image,
                soldout: curr.soldout,
                description: curr.description,
            };
        }
        return curr;
    });
    return {
        ...state,
        stock: newStock
    };
};

const disableProduct = (state: IState, action: storeActions.IDisableProduct): IState => {
    const newStock = state.stock.map((curr) => {
        if (curr.id === action.payload) {
            return {
                id: curr.id,
                name: curr.name,
                stock: curr.stock,
                image: curr.image,
                soldout: false,
                description: curr.description
            };
        }
        return curr;
    });
    return {
        ...state,
        stock: newStock
    };
};

const addStoreItem = (state: IState, action: storeActions.IAddStoreItem): IState => {
    return {
        ...state,
        stock: [
            ...state.stock,
            action.payload
        ]
    };
};

const removeStoreItem = (state: IState, action: storeActions.IRemoveStoreItem): IState => {
    return {
        ...state,
        stock: [
            ...state.stock.filter((item) => (item.id !== action.payload))
        ]
    };
};

export const modifyStore = (state: IState = INITIAL_STATE,
                            action: storeActions.TStoreTypes | Web3Actions.TWeb3Types): IState => {
    switch (action.type) {
        case storeActions.StoreTypes.INCREASE_STOCK:
            return increaseItemStock(state, action);
        case storeActions.StoreTypes.DECREASE_STOCK:
            return decreaseItemStock(state, action);
        case storeActions.StoreTypes.DISABLE_PRODUCT:
            return disableProduct(state, action);
        case storeActions.StoreTypes.ADD_STORE_ITEM:
            return addStoreItem(state, action);
        case storeActions.StoreTypes.REMOVE_STORE_ITEM:
            return removeStoreItem(state, action);
        case Web3Actions.Web3Types.CREATE_INSTANCE:
            return createNewInstance(state, action);
        case Web3Actions.Web3Types.DEPLOY_STORE:
            return deployStoreContract(state, action);
        default:
            return state;
    }
};
