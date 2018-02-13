
import { BigNumber } from 'bignumber.js';
import { SoltsiceContract, W3 } from 'soltsice';

/**
 * Store API
 */
// tslint:disable:variable-name
// tslint:disable:max-line-length
export class Store extends SoltsiceContract {
    static get Artifacts() { return require('../contracts/build/contracts/Store.json'); }

    static get BytecodeHash() {
        // we need this before ctor, but artifacts are static and we cannot pass
        // it to the base class, so need to generate
        const artifacts = Store.Artifacts;
        if (!artifacts || !artifacts.bytecode) {
            return undefined;
        }
        const hash = W3.sha3(JSON.stringify(artifacts.bytecode));
        return hash;
    }

    // tslint:disable-next-line:max-line-length
    public static async New(deploymentParams: W3.TX.TxParams, ctorParams?: {}, w3?: W3, link?: SoltsiceContract[]): Promise<Store> {
        const contract = new Store(deploymentParams, ctorParams, w3, link);
        await contract._instancePromise;
        return contract;
    }

    public static async At(address: string | object, w3?: W3): Promise<Store> {
        const contract = new Store(address, undefined, w3, undefined);
        await contract._instancePromise;
        return contract;
    }

    public static async Deployed(w3?: W3): Promise<Store> {
        const contract = new Store('', undefined, w3, undefined);
        await contract._instancePromise;
        return contract;
    }

    protected constructor(
        deploymentParams: string | W3.TX.TxParams | object,
        ctorParams?: {},
        w3?: W3,
        link?: SoltsiceContract[]
    ) {
        // tslint:disable-next-line:max-line-length
        super(
            w3,
            Store.Artifacts,
            ctorParams ? [] : [],
            deploymentParams,
            link
        );
    }
    /*
        Contract methods
    */

    // tslint:disable-next-line:max-line-length
    // tslint:disable-next-line:variable-name
    public storeItems(_0: BigNumber | number, txParams?: W3.TX.TxParams): Promise<any> {
        return new Promise((resolve, reject) => {
            this._instance.storeItems
                .call(_0, txParams || this._sendParams)
                .then((res: any) => resolve(res))
                .catch((err: any) => reject(err));
        });
    }

    // tslint:disable-next-line:max-line-length
    // tslint:disable-next-line:variable-name
    public itemId(_0: BigNumber | number, txParams?: W3.TX.TxParams): Promise<BigNumber> {
        return new Promise((resolve, reject) => {
            this._instance.itemId
                .call(_0, txParams || this._sendParams)
                .then((res: any) => resolve(res))
                .catch((err: any) => reject(err));
        });
    }

    // tslint:disable-next-line:member-ordering
    public addItem = Object.assign(
        // tslint:disable-next-line:max-line-length
        // tslint:disable-next-line:variable-name
        (_id: BigNumber | number, _name: string, _desc: string, _stock: BigNumber | number, _imagePath: string, txParams?: W3.TX.TxParams): Promise<W3.TX.TransactionResult> => {
            return new Promise((resolve, reject) => {
                this._instance.addItem(_id, _name, _desc, _stock, _imagePath, txParams || this._sendParams)
                    .then((res: any) => resolve(res))
                    .catch((err: any) => reject(err));
            });
        },
        {
            // tslint:disable-next-line:max-line-length
            // tslint:disable-next-line:variable-name
            sendTransaction: Object.assign((_id: BigNumber | number, _name: string, _desc: string, _stock: BigNumber | number, _imagePath: string, txParams?: W3.TX.TxParams): Promise<string> => {
                return new Promise((resolve, reject) => {
                    this._instance.addItem.sendTransaction(_id, _name, _desc, _stock, _imagePath, txParams || this._sendParams)
                        .then((res: any) => resolve(res))
                        .catch((err: any) => reject(err));
                });
            },
                {
                    // tslint:disable-next-line:max-line-length
                    // tslint:disable-next-line:variable-name
                    sendSigned: (_id: BigNumber | number, _name: string, _desc: string, _stock: BigNumber | number, _imagePath: string, privateKey: string, txParams?: W3.TX.TxParams, nonce?: number): Promise<string> => {
                        // tslint:disable-next-line:max-line-length
                        return this.w3.sendSignedTransaction(this.address, privateKey, this._instance.addItem.request(_id, _name, _desc, _stock, _imagePath).params[0].data, txParams, nonce);
                    }
                }
            )
        },
        {
            // tslint:disable-next-line:max-line-length
            // tslint:disable-next-line:variable-name
            data: (_id: BigNumber | number, _name: string, _desc: string, _stock: BigNumber | number, _imagePath: string): Promise<string> => {
                return new Promise((resolve, reject) => {
                    resolve(this._instance.addItem.request(_id, _name, _desc, _stock, _imagePath).params[0].data);
                });
            }
        },
        {
            // tslint:disable-next-line:max-line-length
            // tslint:disable-next-line:variable-name
            estimateGas: (_id: BigNumber | number, _name: string, _desc: string, _stock: BigNumber | number, _imagePath: string): Promise<number> => {
                return new Promise((resolve, reject) => {
                    this._instance.addItem.estimateGas(_id, _name, _desc, _stock, _imagePath).then((g: any) => resolve(g));
                });
            }
        });

    // tslint:disable-next-line:member-ordering
    public changeDesc = Object.assign(
        // tslint:disable-next-line:max-line-length
        // tslint:disable-next-line:variable-name
        (_id: BigNumber | number, _desc: string, txParams?: W3.TX.TxParams): Promise<W3.TX.TransactionResult> => {
            return new Promise((resolve, reject) => {
                this._instance.changeDesc(_id, _desc, txParams || this._sendParams)
                    .then((res: any) => resolve(res))
                    .catch((err: any) => reject(err));
            });
        },
        {
            // tslint:disable-next-line:max-line-length
            // tslint:disable-next-line:variable-name
            sendTransaction: Object.assign((_id: BigNumber | number, _desc: string, txParams?: W3.TX.TxParams): Promise<string> => {
                return new Promise((resolve, reject) => {
                    this._instance.changeDesc.sendTransaction(_id, _desc, txParams || this._sendParams)
                        .then((res: any) => resolve(res))
                        .catch((err: any) => reject(err));
                });
            },
                {
                    // tslint:disable-next-line:max-line-length
                    // tslint:disable-next-line:variable-name
                    sendSigned: (_id: BigNumber | number, _desc: string, privateKey: string, txParams?: W3.TX.TxParams, nonce?: number): Promise<string> => {
                        // tslint:disable-next-line:max-line-length
                        return this.w3.sendSignedTransaction(this.address, privateKey, this._instance.changeDesc.request(_id, _desc).params[0].data, txParams, nonce);
                    }
                }
            )
        },
        {
            // tslint:disable-next-line:max-line-length
            // tslint:disable-next-line:variable-name
            data: (_id: BigNumber | number, _desc: string): Promise<string> => {
                return new Promise((resolve, reject) => {
                    resolve(this._instance.changeDesc.request(_id, _desc).params[0].data);
                });
            }
        },
        {
            // tslint:disable-next-line:max-line-length
            // tslint:disable-next-line:variable-name
            estimateGas: (_id: BigNumber | number, _desc: string): Promise<number> => {
                return new Promise((resolve, reject) => {
                    this._instance.changeDesc.estimateGas(_id, _desc).then((g: any) => resolve(g));
                });
            }
        });

    // tslint:disable-next-line:member-ordering
    public changeName = Object.assign(
        // tslint:disable-next-line:max-line-length
        // tslint:disable-next-line:variable-name
        (_id: BigNumber | number, _stock: BigNumber | number, txParams?: W3.TX.TxParams): Promise<W3.TX.TransactionResult> => {
            return new Promise((resolve, reject) => {
                this._instance.changeName(_id, _stock, txParams || this._sendParams)
                    .then((res: any) => resolve(res))
                    .catch((err: any) => reject(err));
            });
        },
        {
            // tslint:disable-next-line:max-line-length
            // tslint:disable-next-line:variable-name
            sendTransaction: Object.assign((_id: BigNumber | number, _stock: BigNumber | number, txParams?: W3.TX.TxParams): Promise<string> => {
                return new Promise((resolve, reject) => {
                    this._instance.changeName.sendTransaction(_id, _stock, txParams || this._sendParams)
                        .then((res: any) => resolve(res))
                        .catch((err: any) => reject(err));
                });
            },
                {
                    // tslint:disable-next-line:max-line-length
                    // tslint:disable-next-line:variable-name
                    sendSigned: (_id: BigNumber | number, _stock: BigNumber | number, privateKey: string, txParams?: W3.TX.TxParams, nonce?: number): Promise<string> => {
                        // tslint:disable-next-line:max-line-length
                        return this.w3.sendSignedTransaction(this.address, privateKey, this._instance.changeName.request(_id, _stock).params[0].data, txParams, nonce);
                    }
                }
            )
        },
        {
            // tslint:disable-next-line:max-line-length
            // tslint:disable-next-line:variable-name
            data: (_id: BigNumber | number, _stock: BigNumber | number): Promise<string> => {
                return new Promise((resolve, reject) => {
                    resolve(this._instance.changeName.request(_id, _stock).params[0].data);
                });
            }
        },
        {
            // tslint:disable-next-line:max-line-length
            // tslint:disable-next-line:variable-name
            estimateGas: (_id: BigNumber | number, _stock: BigNumber | number): Promise<number> => {
                return new Promise((resolve, reject) => {
                    this._instance.changeName.estimateGas(_id, _stock).then((g: any) => resolve(g));
                });
            }
        });

    // tslint:disable-next-line:member-ordering
    public changeImagePath = Object.assign(
        // tslint:disable-next-line:max-line-length
        // tslint:disable-next-line:variable-name
        (_id: BigNumber | number, _imagePath: string, txParams?: W3.TX.TxParams): Promise<W3.TX.TransactionResult> => {
            return new Promise((resolve, reject) => {
                this._instance.changeImagePath(_id, _imagePath, txParams || this._sendParams)
                    .then((res: any) => resolve(res))
                    .catch((err: any) => reject(err));
            });
        },
        {
            // tslint:disable-next-line:max-line-length
            // tslint:disable-next-line:variable-name
            sendTransaction: Object.assign((_id: BigNumber | number, _imagePath: string, txParams?: W3.TX.TxParams): Promise<string> => {
                return new Promise((resolve, reject) => {
                    this._instance.changeImagePath.sendTransaction(_id, _imagePath, txParams || this._sendParams)
                        .then((res: any) => resolve(res))
                        .catch((err: any) => reject(err));
                });
            },
                {
                    // tslint:disable-next-line:max-line-length
                    // tslint:disable-next-line:variable-name
                    sendSigned: (_id: BigNumber | number, _imagePath: string, privateKey: string, txParams?: W3.TX.TxParams, nonce?: number): Promise<string> => {
                        // tslint:disable-next-line:max-line-length
                        return this.w3.sendSignedTransaction(this.address, privateKey, this._instance.changeImagePath.request(_id, _imagePath).params[0].data, txParams, nonce);
                    }
                }
            )
        },
        {
            // tslint:disable-next-line:max-line-length
            // tslint:disable-next-line:variable-name
            data: (_id: BigNumber | number, _imagePath: string): Promise<string> => {
                return new Promise((resolve, reject) => {
                    resolve(this._instance.changeImagePath.request(_id, _imagePath).params[0].data);
                });
            }
        },
        {
            // tslint:disable-next-line:max-line-length
            // tslint:disable-next-line:variable-name
            estimateGas: (_id: BigNumber | number, _imagePath: string): Promise<number> => {
                return new Promise((resolve, reject) => {
                    this._instance.changeImagePath.estimateGas(_id, _imagePath).then((g: any) => resolve(g));
                });
            }
        });

}
