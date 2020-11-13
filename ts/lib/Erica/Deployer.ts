import { ethers } from 'ethers'
import { Address, Uint256, Uintable } from 'pollenium-buttercup'
import { Uu } from 'pollenium-uvaursi'
import { ContractDeployer, ContractDeployerChildStruct } from 'pollenium-clover'
import { erica } from '../../'


export class EricaDeployer extends ContractDeployer<void> {

  constructor(struct: ContractDeployerChildStruct<void>) {
    super({
      ...erica,
      ...struct
    })
  }
}
