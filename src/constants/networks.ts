import ETHEREUM_LOGO_URL from '../assets/images/ethereum-logo.png'
import { SupportedChainId } from '@pollum-io/sdk-core'

export enum SupportedNetwork {
  ROLLUX,
}

export type NetworkInfo = {
  chainId: SupportedChainId
  id: SupportedNetwork
  route: string
  name: string
  imageURL: string
  bgColor: string
  primaryColor: string
  secondaryColor: string
  blurb?: string
}

export const EthereumNetworkInfo: NetworkInfo = {
  chainId: SupportedChainId.ROLLUX,
  id: SupportedNetwork.ROLLUX,
  route: '',
  name: 'Rollux',
  bgColor: '#fc077d',
  primaryColor: '#fc077d',
  secondaryColor: '#2172E5',
  imageURL: ETHEREUM_LOGO_URL,
}
export const SUPPORTED_NETWORK_VERSIONS: NetworkInfo[] = [EthereumNetworkInfo]
