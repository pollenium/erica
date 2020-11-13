import { AccountName } from './fixtures'
import { getKeypair } from './getKeypair'
import { Wallet } from 'ethers'
import { gaillardia } from './gaillardia'

const wallets: { [key: string]: Wallet } = {}

export function getWallet(accountName: AccountName): Wallet {
  if (wallets[accountName]) {
    return wallets[accountName]
  }
  const keypair = getKeypair(accountName)
  wallets[accountName] = gaillardia.genWallet(keypair.privateKey)
  return wallets[accountName]
}
