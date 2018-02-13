import { Web3Types } from './constants';

export interface CreateInstance {
  readonly type: Web3Types.CREATE_INSTANCE;
  readonly payload?: string;
}

export interface SetProvider {
  readonly type: Web3Types.SET_PROVIDER;
  readonly payload: string;
}

export interface DeployStore {
  readonly type: Web3Types.DEPLOY_STORE;
}

export type TWeb3Types =
  | SetProvider
  | CreateInstance
  | DeployStore;
