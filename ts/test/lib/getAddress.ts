import { getKeypair } from './getKeypair'
import { Address } from 'pollenium-buttercup'
import { AccountName } from './fixtures'

export function getAddress(accountName: AccountName): Address {
  return getKeypair(accountName).getAddress()
}
