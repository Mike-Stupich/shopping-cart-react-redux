// import thunk from 'redux-thunk';
import { W3 } from 'soltsice';
import * as storeActions from '../actions/StoreActions';
// import * as Web3Actions from '../actions/Web3Actions';
import { Store } from '../typedContracts';

// const storeAbi = require('../contracts/build/contracts/Store.json');
// tslint:disable:array-type
// const DEFAULT_PROVIDER = new W3.providers.HttpProvider('http://localhost:7545');

export interface IState {
    itemIndex: number;
    stock: storeActions.IItemFullDataWithTx[];
    web3: W3;
    storeContract: Store | null;
    contractAddress: string | null;
}

export const INITIAL_STATE: IState = {
    itemIndex: 1,
    stock: [],
    web3: W3.Default = new W3(),
    storeContract: null,
    contractAddress: null
};

const userAddr = '0x627306090abaB3A6e1400e9345bC60c78a8BEf57';
// Not useful right now... W3() gets injected web provider
// const createNewInstance = async (state: IState, action: Web3Actions.CreateInstance): Promise<IState> => {
//     const prov = action.payload
//       ? new W3.providers.HttpProvider(action.payload)
//       : DEFAULT_PROVIDER;
//     return {
//         ...state,
//         web3: new W3(prov)
//     };
//   };


// const deployStoreContract = async (state: IState, action: storeActions.DeployStore): Promise<IState> => {
//     const addr = await state.web3.accounts;
//     const stContract = await Store.New(W3.TX.txParamsDefaultDeploy(addr[0]), {}, state.web3);
//     return {
//         ...state,
//         storeContract: stContract,
//         contractAddress: stContract.address,
//     };
// };

const getDeployedStore = async (state: IState, action: storeActions.GetDeployedStore): Promise<IState> => {
    const stContract = await Store.At('0xbd2c938b9f6bfc1a66368d08cb44dc3eb2ae27be', state.web3);
    await stContract.instance;
    return {
        ...state,
        storeContract: stContract,
        contractAddress: action.payload
    };
};

const addStoreItem = async (state: IState, action: storeActions.IAddStoreItem): Promise<IState> => {
    const desc = action.payload.description ? action.payload.description : '';
    const stContract = await Store.At(action.payload, state.web3);
    const inst: Store = await stContract.instance;
    const addItemTx = await inst.addItem(action.payload.id, action.payload.name, desc,
        action.payload.stock, action.payload.image, W3.TX.txParamsDefaultSend(userAddr));
    await console.log(addItemTx);
    return {
        ...state,
        stock: [
            ...state.stock
        ]
    };
};

const getStoreItem = async (state: IState, action: storeActions.RequestItems): Promise<IState> => {
    // const item = state.storeContract!;

    return {
        ...state,
        stock: [
            ...state.stock,
        ]
    };
};

const incrementIndex = async (state: IState, action: storeActions.IIncrementIndex): Promise<IState> => {
    return {
        ...state,
        itemIndex: state.itemIndex++
    };
};

// const removeStoreItem = (state: IState, action: storeActions.IRemoveStoreItem): IState => {
//     return {
//         ...state,
//         stock: [
//             ...state.stock.filter((item) => (item.id !== action.payload))
//         ]
//     };
// };

export const modifyStore = async (state: IState = INITIAL_STATE,
                                  action: storeActions.TStoreTypes): Promise<IState> => {
    switch (action.type) {
        // case storeActions.StoreTypes.INCREASE_STOCK:
        //     return increaseItemStock(state, action);
        // case storeActions.StoreTypes.DECREASE_STOCK:
        //     return decreaseItemStock(state, action);
        case storeActions.StoreTypes.REQUEST_ITEMS:
            return await getStoreItem(state, action);
        case storeActions.StoreTypes.ADD_STORE_ITEM:
            return await addStoreItem(state, action);
        case storeActions.StoreTypes.INCREMENT_INDEX:
            return await incrementIndex(state, action);
        case storeActions.StoreTypes.GET_DEPLOYED_STORE:
            return await getDeployedStore(state, action);
        default:
            return await state;
    }
};
