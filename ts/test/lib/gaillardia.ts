import { Gaillardia, gaillardiaDefaults } from 'pollenium-gaillardia'
import { accountNames } from './fixtures'
import { getKeypair } from './getKeypair'
import { $enum } from 'ts-enum-util'
import { Uu } from 'pollenium-uvaursi'
import { ETHER } from 'pollenium-weigela'
import { Uint256 } from 'pollenium-buttercup'

export const gaillardia = new Gaillardia({
  ...gaillardiaDefaults,
  accounts: accountNames.map((name) => {
    const keypair = getKeypair(name)
    return {
      privateKey: keypair.privateKey,
      startBalance: ETHER.opMul(10),
    }
  })
})
