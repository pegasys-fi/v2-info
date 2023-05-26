import { SupportedChainId } from 'constants/chains'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId: number]: string } = {
  [SupportedChainId.ROLLUX]: '0x0Cb0a51572A2B0c97ba2dFf061fB6bFed662fD40',
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
