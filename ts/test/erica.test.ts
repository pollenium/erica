import { AccountName, memberNames, individualNames } from './lib/fixtures'
import { EricaDeployer, EricaReader, EricaWriter } from '../../'
import { getAddress } from './lib/getAddress'
import { getWallet } from './lib/getWallet'
import { Address, Bytes } from 'pollenium-buttercup'
import { gaillardia } from './lib/gaillardia'
import { Uu } from 'pollenium-uvaursi'
import asynq from 'async-q'

const deployer = getAddress('deployer')
const admin = getAddress('admin')
const attacker = getAddress('attacker')
const alice = getAddress('alice')
const bob = getAddress('bob')
const charlie = getAddress('charlie')

const name0 = Uu.fromUtf8('name:0')
const symbol0 = Uu.fromUtf8('symbol:0')

let erica: Address
let ericaReader: EricaReader

const writers: { [key: string]: EricaWriter } = {}

function getWriter(accountName: AccountName): EricaWriter {
  if (!erica) {throw new Error('Set erica')}
  if (writers[accountName]) {
    return writers[accountName]
  }
  writers[accountName] = new EricaWriter({
    address: erica,
    signer: getWallet(accountName)
  })
  return writers[accountName]
}

const expected = {
  owner: deployer,
  name: Uu.genEmpty(),
  symbol: Uu.genEmpty(),
  isPaused: false,
  totalSupply: 0,
  balances: {
    alice: 0,
    bob: 0
  }
}

test(`deploy erica`, async () => {
  const ericaDeployer = new EricaDeployer({ signer: getWallet('deployer') })
  const { address } = await ericaDeployer.deploy()
  erica = address
  ericaReader = new EricaReader({
    provider: gaillardia.ethersWeb3Provider,
    address: erica
  })
})

test('defaults should be correct', async () => {
  const owner = await ericaReader.fetchOwner()
  const name = await ericaReader.fetchName()
  const symbol = await ericaReader.fetchSymbol()
  const totalSupply = await ericaReader.fetchTotalSupply()
  const isPaused = await ericaReader.fetchIsPaused()

  expect(owner.uu.toHex()).toStrictEqual(expected.owner.uu.toHex())
  expect(name.toHex()).toEqual(expected.name.toHex())
  expect(symbol.toHex()).toEqual(expected.symbol.toHex())
  expect(totalSupply.toNumber()).toEqual(expected.totalSupply)
  expect(isPaused).toEqual(expected.isPaused)
})

test(`individualNames (${individualNames}) should be not be memberAccounts`, async () => {
  await asynq.forEach(individualNames, async (individualNames) => {
    const isMemberAccount = await ericaReader.fetchIsMemberAccount(getAddress(individualNames))
    expect(isMemberAccount).toEqual(false)
  })
})

test(`attacker cannot setOwner`, async () => {
  await expect(getWriter('attacker').setOwner(attacker)).rejects.toBeInstanceOf(Error)
  const owner = await ericaReader.fetchOwner()
  expect(owner.uu.toHex()).toStrictEqual(deployer.uu.toHex())
})

test(`deployer should setOwner to admin `, async () => {
  await getWriter('deployer').setOwner(admin)
  const owner = await ericaReader.fetchOwner()
  expect(owner.uu.toHex()).toStrictEqual(admin.uu.toHex())
})


test(`attacker cannot setName`, async () => {
  await expect(getWriter('attacker').setName(name0)).rejects.toBeInstanceOf(Error)
  const name = await ericaReader.fetchName()
  expect(name.toHex()).toEqual(expected.name.toHex())
})

test(`attacker cannot setSymbol`, async () => {
  await expect(getWriter('attacker').setSymbol(symbol0)).rejects.toBeInstanceOf(Error)
  const symbol = await ericaReader.fetchSymbol()
  expect(symbol.toHex()).toEqual(expected.symbol.toHex())
})

test(`attacker cannot setIsMemberAccount`, async () => {
  await expect(getWriter('attacker').setIsMemberAccount(attacker, true)).rejects.toBeInstanceOf(Error)
  const isMemberAccount = await ericaReader.fetchIsMemberAccount(attacker)
  expect(isMemberAccount).toStrictEqual(false)
})

test(`admin should set memberNames (${memberNames}) setIsMemberAccount to true`, async () => {
  await asynq.forEachLimit(memberNames, 1, async (memberName) => {
    const member = getAddress(memberName)
    await getWriter('admin').setIsMemberAccount(member, true)
    const isMemberAccount = await ericaReader.fetchIsMemberAccount(member)
    expect(isMemberAccount).toStrictEqual(true)
  })
})

test(`admin should be able to setName`, async () => {
  expected.name = name0
  await getWriter('admin').setName(name0)
  const name = await ericaReader.fetchName()
  expect(name.toHex()).toEqual(expected.name.toHex())
})

test(`admin should be able to setSymbol`, async () => {
  expected.symbol = symbol0
  await getWriter('admin').setSymbol(symbol0)
  const symbol = await ericaReader.fetchSymbol()
  expect(symbol.toHex()).toEqual(expected.symbol.toHex())
})

test(`attacker cannot mint`, async () => {
  await expect(getWriter('attacker').mint({
    to: attacker,
    amount: 10,
    reason: Uu.fromUtf8('hack')
  })).rejects.toBeInstanceOf(Error)
  const totalSupply = await ericaReader.fetchTotalSupply()
  expect(totalSupply.toNumber()).toEqual(expected.totalSupply)
})

test(`admin can mint 10 to alice`, async () => {
  expected.totalSupply += 10
  expected.balances.alice += 10
  await getWriter('admin').mint({
    to: alice,
    amount: 10,
    reason: Uu.fromUtf8('give alice tokens')
  })
  const totalSupply = await ericaReader.fetchTotalSupply()
  const aliceBalance = await ericaReader.fetchBalance(alice)
  expect(totalSupply.toNumber()).toEqual(expected.totalSupply)
  expect(aliceBalance.toNumber()).toEqual(expected.balances.alice)
})

test(`admin can mint 20 to bob`, async () => {
  expected.totalSupply += 20
  expected.balances.bob += 20
  await getWriter('admin').mint({
    to: bob,
    amount: 20,
    reason: Uu.fromUtf8('give bob tokens')
  })
  const totalSupply = await ericaReader.fetchTotalSupply()
  const bobBalance = await ericaReader.fetchBalance(bob)
  expect(totalSupply.toNumber()).toEqual(expected.totalSupply)
  expect(bobBalance.toNumber()).toEqual(expected.balances.bob)
})

test(`attacker cannot burn`, async () => {
  await expect(getWriter('attacker').burn({
    from: bob,
    amount: 5,
    reason: Uu.fromUtf8('hack')
  })).rejects.toBeInstanceOf(Error)
  const totalSupply = await ericaReader.fetchTotalSupply()
  const bobBalance = await ericaReader.fetchBalance(bob)
  expect(totalSupply.toNumber()).toEqual(expected.totalSupply)
  expect(bobBalance.toNumber()).toEqual(expected.balances.bob)
})

test(`admin can burn 5 from bob`, async () => {
  expected.totalSupply -= 5
  expected.balances.bob -= 5
  await getWriter('admin').burn({
    from: bob,
    amount: 5,
    reason: Uu.fromUtf8('burn bobby burn')
  })
  const totalSupply = await ericaReader.fetchTotalSupply()
  const bobBalance = await ericaReader.fetchBalance(bob)
  expect(totalSupply.toNumber()).toEqual(expected.totalSupply)
  expect(bobBalance.toNumber()).toEqual(expected.balances.bob)
})

test(`alice can transfer 5 to bob `, async () => {
  expected.balances.alice -= 5
  expected.balances.bob += 5
  await getWriter('alice').transfer({
    to: bob,
    amount: 5
  })
  const totalSupply = await ericaReader.fetchTotalSupply()
  const aliceBalance = await ericaReader.fetchBalance(alice)
  const bobBalance = await ericaReader.fetchBalance(bob)
  expect(totalSupply.toNumber()).toEqual(expected.totalSupply)
  expect(aliceBalance.toNumber()).toEqual(expected.balances.alice)
  expect(bobBalance.toNumber()).toEqual(expected.balances.bob)
})

test(`alice cannot transfer 5 to charlie `, async () => {
  await expect(getWriter('alice').transfer({
    to: charlie,
    amount: 5
  })).rejects.toBeInstanceOf(Error)
  const totalSupply = await ericaReader.fetchTotalSupply()
  const aliceBalance = await ericaReader.fetchBalance(alice)
  const bobBalance = await ericaReader.fetchBalance(bob)
  expect(totalSupply.toNumber()).toEqual(expected.totalSupply)
  expect(aliceBalance.toNumber()).toEqual(expected.balances.alice)
  expect(bobBalance.toNumber()).toEqual(expected.balances.bob)
})

test(`attacker should not be able to setIsPaused `, async () => {
  await expect(getWriter('attacker').setIsPaused(true)).rejects.toBeInstanceOf(Error)
  const isPaused = await ericaReader.fetchIsPaused()
  expect(isPaused).toEqual(expected.isPaused)
})

test(`admin should not be able to setIsPaused to true`, async () => {
  expected.isPaused = true
  await getWriter('admin').setIsPaused(true)
  const isPaused = await ericaReader.fetchIsPaused()
  expect(isPaused).toEqual(expected.isPaused)
})

test(`alice cannot transfer 5 to bob `, async () => {
  await expect(getWriter('alice').transfer({
    to: bob,
    amount: 5
  })).rejects.toBeInstanceOf(Error)
  const totalSupply = await ericaReader.fetchTotalSupply()
  const aliceBalance = await ericaReader.fetchBalance(alice)
  const bobBalance = await ericaReader.fetchBalance(bob)
  expect(totalSupply.toNumber()).toEqual(expected.totalSupply)
  expect(aliceBalance.toNumber()).toEqual(expected.balances.alice)
  expect(bobBalance.toNumber()).toEqual(expected.balances.bob)
})

test(`admin should not be able to setIsPaused to false`, async () => {
  expected.isPaused = false
  await getWriter('admin').setIsPaused(false)
  const isPaused = await ericaReader.fetchIsPaused()
  expect(isPaused).toEqual(expected.isPaused)
})

test(`alice can transfer 5 to bob `, async () => {
  expected.balances.alice -= 5
  expected.balances.bob += 5
  await getWriter('alice').transfer({
    to: bob,
    amount: 5
  })
  const totalSupply = await ericaReader.fetchTotalSupply()
  const aliceBalance = await ericaReader.fetchBalance(alice)
  const bobBalance = await ericaReader.fetchBalance(bob)
  expect(totalSupply.toNumber()).toEqual(expected.totalSupply)
  expect(aliceBalance.toNumber()).toEqual(expected.balances.alice)
  expect(bobBalance.toNumber()).toEqual(expected.balances.bob)
})
