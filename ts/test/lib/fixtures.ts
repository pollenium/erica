import { Primrose } from 'pollenium-primrose'
import { Address } from 'pollenium-buttercup'

export type AccountName =
  'alice'
  | 'bob'
  | 'charlie'
  | 'deployer'
  | 'attacker'
  | 'admin'


export const memberNames: AccountName[] = ['alice', 'bob']
export const individualNames: AccountName[] = [...memberNames, 'charlie']

export const accountNames: AccountName[] = [...individualNames, 'attacker', 'deployer', 'admin']
