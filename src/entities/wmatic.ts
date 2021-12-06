import { Token } from './token'

/**
 * Known WMATIC implementation addresses, used in our implementation of Matic#wrapped
 */
export const WMATIC: { [chainId: number]: Token } = {
  [137]: new Token(137, '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270', 18, 'WMATIC', 'Wrapped Matic')
}
