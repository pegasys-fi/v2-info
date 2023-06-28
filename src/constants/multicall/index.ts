import { SupportedChainId } from 'constants/chains'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId: number]: string } = {
  [SupportedChainId.ROLLUX]: '0x6aE73f43cc18Bb9ffB35204023C6C7897CA879C4',
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
