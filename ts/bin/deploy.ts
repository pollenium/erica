import { promptAdminWallet } from './lib/promptAdminWallet'
import { EricaDeployer } from '../../'

async function run() {
  const adminWallet = await promptAdminWallet()
  const { address } = await new EricaDeployer({ signer: adminWallet }).deploy()
  console.log(`deployed Erica to ${address.uu.toHex()}`)
}

run()
