import { ethers } from 'ethers'
import { Address, Uint256, Bytes, Bytes32, Uint8, Uintable } from 'pollenium-buttercup'
import { Uu, Uish } from 'pollenium-uvaursi'
import { ContractWriter, ContractWriterChildStruct, StateChange } from 'pollenium-clover'
import { erica } from '../../'

export class EricaWriter extends ContractWriter {

  constructor(struct: ContractWriterChildStruct) {
    super({
      ...erica,
      ...struct
    })
  }

  async setOwner(address: Uish): Promise<StateChange> {
    return this.genStateChange(
      this.ethersContract.transferOwnership(new Address(address).uu.toPhex())
    )
  }

  async setName(name: Uish): Promise<StateChange> {
    return this.genStateChange(
      this.ethersContract.setName(Uu.wrap(name).toUtf8())
    )
  }

  async setSymbol(symbol: Uish): Promise<StateChange> {
    return this.genStateChange(
      this.ethersContract.setSymbol(Uu.wrap(symbol).toUtf8())
    )
  }

  async mint(struct: {
    to: Uish,
    amount: Uintable,
    reason: Uish
  }): Promise<StateChange> {
    const to = new Address(struct.to)
    const amount = new Uint256(struct.amount)
    const reason = Uu.wrap(struct.reason)
    return this.genStateChange(
      this.ethersContract.mint(
        to.uu.toPhex(),
        amount.uu.toPhex(),
        reason.toPhex()
      )
    )
  }

  async burn(struct: {
    from: Uish,
    amount: Uintable,
    reason: Uish
  }): Promise<StateChange> {
    const from = new Address(struct.from)
    const amount = new Uint256(struct.amount)
    const reason = Uu.wrap(struct.reason)
    return this.genStateChange(
      this.ethersContract.burn(
        from.uu.toPhex(),
        amount.uu.toPhex(),
        reason.toPhex()
      )
    )
  }

  async transfer(struct: {
    to: Uish,
    amount: Uintable
  }): Promise<StateChange> {
    const to = new Address(struct.to)
    const amount = new Uint256(struct.amount)
    return this.genStateChange(
       this.ethersContract.transfer(to.uu.toPhex(), amount.uu.toPhex())
    )
  }

  async setAllowance(struct: {
    spender: Uish,
    amount: Uintable
  }): Promise<StateChange> {
    const spender = new Address(struct.spender)
    const amount = new Uint256(struct.amount)
    return this.genStateChange(
       this.ethersContract.approve(spender.uu.toPhex(), amount.uu.toPhex())
    )
  }

  async setIsMemberAccount(address: Uish, isMemberAccount: boolean): Promise<StateChange> {
    return this.genStateChange(
       this.ethersContract.setIsMemberAccount(
         new Address(address).uu.toPhex(),
         isMemberAccount
       )
    )
  }

  async setIsPaused(isPaused: boolean): Promise<StateChange> {
    return this.genStateChange(
       this.ethersContract.setIsPaused(isPaused)
    )
  }

}
