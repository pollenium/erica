import { ethers } from 'ethers'
import { Address, Uint256 } from 'pollenium-buttercup'
import { Uu, Uish } from 'pollenium-uvaursi'
import { ContractReader, ContractReaderChildStruct } from 'pollenium-clover'
import { token } from '../../'

export class TokenReader extends ContractReader {

  constructor(struct: ContractReaderChildStruct) {
    super({
      ...token,
      ...struct
    })
  }


  async fetchBalance(holderUish: Uish): Promise<Uint256> {
    const holder = new Address(holderUish)
    const holderBignumber = await this.ethersContract.balanceOf(holder.uu.toPhex())
    return new Uint256(Uu.fromHexish(
      await ethers.utils.hexlify(holderBignumber)
    ))
  }

  async fetchAllowance(struct: {
    holder: Uish,
    spender: Uish
  }): Promise<Uint256> {
    const holder = new Address(struct.holder)
    const spender = new Address(struct.spender)
    const allowanceBignumber = await this.ethersContract.allowance(
      holder.uu.toPhex(),
      spender.uu.toPhex()
    )
    return new Uint256(Uu.fromHexish(
      await ethers.utils.hexlify(allowanceBignumber)
    ))
  }

}
