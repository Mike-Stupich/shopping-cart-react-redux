import { Web3Types } from './constants';
import * as interfaces from './interfaces';

export type TcreateInstance = typeof createInstance;
export const createInstance = (payload?: string): interfaces.CreateInstance => {
  return { type: Web3Types.CREATE_INSTANCE, payload };
};

export type TsetProvider = typeof setProvider;
export const setProvider = (payload: string): interfaces.SetProvider => {
  return { type: Web3Types.SET_PROVIDER, payload };
};

export type TdeployStoreContract = typeof deployStoreContract;
export const deployStoreContract = (): interfaces.DeployStore => {
  return { type: Web3Types.DEPLOY_STORE };
};
