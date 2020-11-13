import { ethers } from 'ethers';
export declare type Endpoint = 'mainnet' | 'ropsten' | 'kovan' | 'rinkeby' | 'goerli';
export declare function getProvider(endpoint: Endpoint): ethers.providers.InfuraProvider;
