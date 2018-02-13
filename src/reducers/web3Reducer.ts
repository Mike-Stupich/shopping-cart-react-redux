import { W3 } from 'soltsice';
import * as Web3Actions from '../actions/Web3Actions';

const DEFAULT_PROVIDER = new W3.providers.HttpProvider('http://localhost:7545');
export interface IState {
  W3Instance: W3 | null;
  provider: W3.Provider;
}

export const INITIAL_STATE = {
  W3Instance: new W3(),
  provider: DEFAULT_PROVIDER
};

const createNewInstance = (state: IState, action: Web3Actions.CreateInstance): IState => {
  const prov = action.payload
    ? new W3.providers.HttpProvider(action.payload)
    : DEFAULT_PROVIDER;
  return {
    W3Instance: new W3(prov),
    provider: prov
  };
};

const setProvider = (state: IState, action: Web3Actions.SetProvider): IState => {
  const prov = new W3.providers.HttpProvider(action.payload);
  return {
    W3Instance: new W3(prov),
    provider: prov
  };
};

export const modifyWeb3 = (state: IState = INITIAL_STATE, action: Web3Actions.TWeb3Types): IState => {
  switch (action.type) {
    case Web3Actions.Web3Types.CREATE_INSTANCE:
      return createNewInstance(state, action);
    case Web3Actions.Web3Types.SET_PROVIDER:
      return setProvider(state, action);
    // case Web3Actions.Web3Types.DEPLOY_STORE:
    //     return deployStoreContract(state, action);
    default:
      return state;
  }
};
