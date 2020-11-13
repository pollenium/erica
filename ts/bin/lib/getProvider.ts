import { ethers } from 'ethers'
import dotenv from 'dotenv'

dotenv.config()

export type Endpoint = 'mainnet' | 'ropsten' | 'kovan' | 'rinkeby' | 'goerli'

export function getProvider(endpoint: Endpoint) {
  return new ethers.providers.InfuraProvider(endpoint, process.env.INFURA_ID)
}
