import { W3 } from 'soltsice';
import * as storeActions from '../actions/StoreActions';
// import * as Web3Actions from '../actions/Web3Actions';
import { Store } from '../typedContracts';

// const storeAbi = require('../contracts/build/contracts/Store.json');
// tslint:disable:array-type
// const DEFAULT_PROVIDER = new W3.providers.HttpProvider('http://localhost:7545');

export interface IState {
    readonly itemIndex: number;
    readonly localStock: storeActions.IItemFullData[];
    readonly web3Stock: storeActions.IItemFullDataWithTx[];
    readonly web3: W3;
    readonly storeContract: Promise<Store> | null;
    readonly contractAddress: string | null;
}

export const INITIAL_STATE: IState = {
    itemIndex: 1,
    localStock: [],
    web3Stock: [],
    web3: W3.Default = new W3(),
    storeContract: null,
    contractAddress: null
};

const userAddr = '0x627306090abaB3A6e1400e9345bC60c78a8BEf57';

const deployStoreContract = (state: IState, action: storeActions.NewStore): IState => {
    const stContract = Store.New(W3.TX.txParamsDefaultDeploy(userAddr), {}, state.web3)
        .then((contract) => {
            return contract;
        });
    return {
        ...state,
        storeContract: stContract,
        contractAddress: '',
    };
};

const getDeployedStore = (state: IState, action: storeActions.GetDeployedStore): IState => {
    const stContract = Store.At('0xbd2c938b9f6bfc1a66368d08cb44dc3eb2ae27be', state.web3)
        .then((contract) => {
            return contract;
        });

    return {
        ...state,
        storeContract: stContract,
        contractAddress: action.payload
    };
};

const addStoreItem = (state: IState, action: storeActions.IAddStoreItem): IState => {
    const desc = action.payload.description ? action.payload.description : '';
    const itemTx = state.storeContract!
        .then((store) => {
            return store.addItem(state.itemIndex, action.payload.name, desc,
                action.payload.stock, action.payload.image, W3.TX.txParamsDefaultDeploy(userAddr));
        }).then((tx) => {
            return tx;
        });
    return {
        ...state,
        localStock: [
            ...state.localStock,
            action.payload
        ],
        web3Stock: [
            ...state.web3Stock,
            {
                storeItem: action.payload,
                tx: itemTx
            }
        ]
    };
};

const getStoreItems = (state: IState, action: storeActions.GetItem): IState => {
    const contract = state.storeContract!;
    const foundItem: Promise<storeActions.IItemFullData> = contract.then((store) => {
            return store.storeItems(action.payload);
        }).then((item) => {
            console.log(item);
            return {
                id: action.payload,
                name: item.name,
                description: item.description,
                image: item.image,
                stock: item.stock,
                soldout: false,
            };
        });
    if (!foundItem) {
        return {
            ...state,
            localStock: [
                ...state.localStock
            ]
        };
    }
    console.log(foundItem);
    return {
        ...state,
        localStock: [
            ...state.localStock,
        ]
    };
};

const incrementIndex = (state: IState, action: storeActions.IIncrementIndex): IState => {
    return {
        ...state,
        itemIndex: state.itemIndex + 1
    };
};

// const removeStoreItem = (state: IState, action: storeActions.IRemoveStoreItem): IState => {
//     return {
//         ...state,
//         localStock: [
//             ...state.stock.filter((item) => (item.id !== action.payload))
//         ]
//     };
// };

export const modifyStore = (state: IState = INITIAL_STATE,
                            action: storeActions.TStoreTypes): IState => {
    switch (action.type) {
        case storeActions.StoreTypes.GET_ITEM:
            return getStoreItems(state, action);
        case storeActions.StoreTypes.ADD_STORE_ITEM:
            return addStoreItem(state, action);
        case storeActions.StoreTypes.INCREMENT_INDEX:
            return incrementIndex(state, action);
        case storeActions.StoreTypes.GET_DEPLOYED_STORE:
            return getDeployedStore(state, action);
        case storeActions.StoreTypes.NEW_STORE:
            return deployStoreContract(state, action);
        default:
            return state;
    }
};
