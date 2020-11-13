import prompt from 'prompt-promise'
import { Endpoint } from './getProvider'

export async function promptEndpoint(): Promise<Endpoint> {
  const letter = await prompt('Endpoint [(m)ainnet/(k)ovan]: ')
  switch(letter) {
    case 'm':
      return 'mainnet'
    case 'k':
      return 'kovan'
    default:
      throw new Error(`Invalid response: "${letter}"`)
  }
}
