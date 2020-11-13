import { promptComputeAdminKeypair } from './promptComputeAdminKeypair'
import { promptEndpoint } from './promptEndpoint'
import { Wallet } from 'ethers'
import { getProvider } from './getProvider'

export async function promptAdminWallet(): Promise<Wallet> {
  const keypair = await promptComputeAdminKeypair()
  const endpoint = await promptEndpoint()
  const provider = getProvider(endpoint)
  return new Wallet(keypair.privateKey.u, provider)
}
