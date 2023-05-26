import { Token } from '@pollum-io/sdk-core'
import { NetworkInfo } from 'constants/networks'
import { WETH_ADDRESSES } from '../constants'

export interface SerializedToken {
  chainId: number
  address: string
  decimals: number
  symbol?: string
  name?: string
}

export function serializeToken(token: Token): SerializedToken {
  return {
    chainId: token.chainId,
    address: token.address,
    decimals: token.decimals,
    symbol: token.symbol,
    name: token.name,
  }
}

export function formatTokenSymbol(address: string, symbol: string, activeNetwork?: NetworkInfo) {
  if (WETH_ADDRESSES.includes(address)) {
    return 'SYS'
  }
  return symbol
}

export function formatTokenName(address: string, name: string, activeNetwork?: NetworkInfo) {
  // dumb catch for matic

  if (WETH_ADDRESSES.includes(address)) {
    return 'Syscoin'
  }
  return name
}
