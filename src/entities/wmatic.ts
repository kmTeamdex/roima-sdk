/* eslint-disable prettier/prettier */

import { SupportedChainId } from '..'
import { Token } from './token'

/**
 * Known WMATIC implementation addresses, used in our implementation of Matic#wrapped
 */
export const WMATIC: { [chainId: number]: Token } = {
  // eslint-disable-next-line prettier/prettier
  [SupportedChainId.POLYGON]: new Token(
    137,
    '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    18,
    'WMATIC',
    'Wrapped Matic'
  ),
  [SupportedChainId.MUMBAI]: new Token(137, '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889', 18, 'WMATIC', 'Wrapped Matic')
}
