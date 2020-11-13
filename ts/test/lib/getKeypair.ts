import { AccountName } from './fixtures'
import { Keypair } from 'pollenium-ilex'

const keypairs: { [key: string]: Keypair } = {}

export function getKeypair(accountName: AccountName): Keypair {
  if (keypairs[accountName]) {
    return keypairs[accountName]
  }
  keypairs[accountName] = Keypair.generate()
  return keypairs[accountName]
}
