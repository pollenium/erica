import { ethers } from 'ethers'
import { Address, Uint256, Uint8, Uintable, Bytes32 } from 'pollenium-buttercup'
import { Uu, Uish } from 'pollenium-uvaursi'
import { ContractReader, ContractReaderChildStruct, ContractReaderLog, ContractReaderFilterBlockRange } from 'pollenium-clover'
import { erica } from '../../'
import { BigNumber as EthersBignumber, Event as EthersLog } from 'ethers'

interface MintWithReasonLogValues { to: Address, value: Uint256, reason: Uu }
interface MintWithReasonLog extends ContractReaderLog<MintWithReasonLogValues> {}

interface BurnWithReasonLogValues { from: Address, value: Uint256, reason: Uu }
interface BurnWithReasonLog extends ContractReaderLog<BurnWithReasonLogValues> {}

interface TransferLogValues { from: Address, to: Address, value: Uint256 }
interface TransferLog extends ContractReaderLog<TransferLogValues> {}

interface SetIsPausedWithReasonLogValues { isPaused: boolean, reason: Uu }
interface SetIsPausedWithReasonLog extends ContractReaderLog<SetIsPausedWithReasonLogValues> {}

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

  async fetchMintWithReasonLogs(range: ContractReaderFilterBlockRange): Promise<MintWithReasonLog[]> {
    return this.fetchLogs<
      { to: string, value: EthersBignumber, reason: string },
      MintWithReasonLogValues
    >({
      filter: this.ethersContract.filters.MintWithReason(),
      range,
      transformEthersLogArgsToLogValues: (args) => {
        return {
          to: new Address(Uu.fromHexish(args.to)),
          value: new Uint256(Uu.fromHexish(args.value.toHexString())),
          reason: Uu.fromHexish(args.reason)
        }
      }
    })
  }

  async fetchBurnWithReasonLogs(range: ContractReaderFilterBlockRange): Promise<BurnWithReasonLog[]> {
    return this.fetchLogs<
      { from: string, value: EthersBignumber, reason: string },
      BurnWithReasonLogValues
    >({
      filter: this.ethersContract.filters.BurnWithReason(),
      range,
      transformEthersLogArgsToLogValues: (args) => {
        return {
          from: new Address(Uu.fromHexish(args.from)),
          value: new Uint256(Uu.fromHexish(args.value.toHexString())),
          reason: Uu.fromHexish(args.reason)
        }
      }
    })
  }

  async fetchTransferLogs(range: ContractReaderFilterBlockRange): Promise<TransferLog[]> {
    return this.fetchLogs<
      { to: string, from: string, value: EthersBignumber },
      TransferLogValues
    >({
      filter: this.ethersContract.filters.Transfer(),
      range,
      transformEthersLogArgsToLogValues: (args) => {
        return {
          to: new Address(Uu.fromHexish(args.to)),
          from: new Address(Uu.fromHexish(args.from)),
          value: new Uint256(Uu.fromHexish(args.value.toHexString()))
        }
      }
    })
  }

  async fetchSetIsPausedWithReasonLogs(range: ContractReaderFilterBlockRange): Promise<SetIsPausedWithReasonLog[]> {
    return this.fetchLogs<
      { isPaused: boolean, reason: string },
      SetIsPausedWithReasonLogValues
    >({
      filter: this.ethersContract.filters.SetIsPausedWithReason(),
      range,
      transformEthersLogArgsToLogValues: (args) => {
        return {
          isPaused: args.isPaused,
          reason: Uu.fromHexish(args.reason)
        }
      }
    })
  }

}

type EthersBlockTag = 'latest' | 'pending'
type BlockFlag = EthersBlockFlag | Uintable
type EthersBlockFlag = EthersBlockTag | number
