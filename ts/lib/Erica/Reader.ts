import { ethers } from 'ethers'
import { Address, Uint256, Uint8 } from 'pollenium-buttercup'
import { Uu, Uish } from 'pollenium-uvaursi'
import { ContractReader, ContractReaderChildStruct } from 'pollenium-clover'
import { erica } from '../../'

export class EricaReader extends ContractReader {

  constructor(struct: ContractReaderChildStruct) {
    super({
      ...erica,
      ...struct
    })
  }

  async fetchOwner(): Promise<Address> {
    return new Address(Uu.fromHexish(
      await this.ethersContract.owner()
    ))
  }

  async fetchName(): Promise<Uu> {
    return Uu.fromUtf8(await this.ethersContract.name())
  }

  async fetchSymbol(): Promise<Uu> {
    return Uu.fromUtf8(await this.ethersContract.symbol())
  }

  async fetchDecimals(): Promise<Uint8> {
    const decimalsBignumber = await this.ethersContract.decimals()
    return new Uint8(Uu.fromHexish(
      await ethers.utils.hexlify(decimalsBignumber)
    ))
  }

  async fetchTotalSupply(): Promise<Uint256> {
    const totalSupplyBignumber = await this.ethersContract.totalSupply()
    return new Uint256(Uu.fromHexish(
      await ethers.utils.hexlify(totalSupplyBignumber)
    ))
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

  fetchIsPaused(): Promise<boolean> {
    return this.ethersContract.isPaused()
  }

  fetchIsMemberAccount(address: Uish): Promise<boolean> {
     return this.ethersContract.isMemberAccount((new Address(address)).uu.toPhex())
  }

}
