import { coreopsis } from './coreopsis'
import { admin } from './admin'
import { Keypair } from 'pollenium-ilex'

export async function promptComputeAdminKeypair(): Promise<Keypair> {
  const keypair = await coreopsis.promptComputeKeypair()
  const address = keypair.getAddress()
  if (!admin.uu.getIsEqual(address.uu)) {
    throw new Error(`Invalid address: ${address.uu.toHex()}`)
  }
  return keypair
}
