import { useBlocksFromTimestamps } from 'hooks/useBlocksFromTimestamps'
import { useDeltaTimestamps } from 'utils/queries'
import { useState, useEffect, useMemo } from 'react'
import gql from 'graphql-tag'
import { ApolloClient, NormalizedCacheObject } from '@apollo/client'
import { useActiveNetworkVersion, useClients } from 'state/application/hooks'

export interface EthPrices {
  current: number
  oneDay: number
  twoDay: number
  week: number
}

export const ETH_PRICES = gql`
  query prices($block24: Int!, $block48: Int!, $blockWeek: Int!) {
    current: bundles(first: 1, subgraphError: allow) {
      sysPriceUSD
    }
    oneDay: bundles(first: 1, block: { number: $block24 }, subgraphError: allow) {
      sysPriceUSD
    }
    twoDay: bundles(first: 1, block: { number: $block48 }, subgraphError: allow) {
      sysPriceUSD
    }
    oneWeek: bundles(first: 1, block: { number: $blockWeek }, subgraphError: allow) {
      sysPriceUSD
    }
  }
`

interface PricesResponse {
  current: {
    sysPriceUSD: string
  }[]
  oneDay: {
    sysPriceUSD: string
  }[]
  twoDay: {
    sysPriceUSD: string
  }[]
  oneWeek: {
    sysPriceUSD: string
  }[]
}

async function fetchEthPrices(
  blocks: [number, number, number],
  client: ApolloClient<NormalizedCacheObject>
): Promise<{ data: EthPrices | undefined; error: boolean }> {
  try {
    const { data, error } = await client.query<PricesResponse>({
      query: ETH_PRICES,
      variables: {
        block24: blocks[0],
        block48: blocks[1] ?? 1,
        blockWeek: blocks[2] ?? 1,
      },
    })

    if (error) {
      return {
        error: true,
        data: undefined,
      }
    } else if (data) {
      return {
        data: {
          current: parseFloat(data.current[0].sysPriceUSD ?? 0),
          oneDay: parseFloat(data.oneDay[0]?.sysPriceUSD ?? 0),
          twoDay: parseFloat(data.twoDay[0]?.sysPriceUSD ?? 0),
          week: parseFloat(data.oneWeek[0]?.sysPriceUSD ?? 0),
        },
        error: false,
      }
    } else {
      return {
        data: undefined,
        error: true,
      }
    }
  } catch (e) {
    console.log(e)
    return {
      data: undefined,
      error: true,
    }
  }
}

/**
 * returns eth prices at current, 24h, 48h, and 1w intervals
 */
export function useEthPrices(): EthPrices | undefined {
  const [prices, setPrices] = useState<{ [network: string]: EthPrices | undefined }>()
  const [error, setError] = useState(false)
  const { dataClient } = useClients()

  const [t24, t48, tWeek] = useDeltaTimestamps()
  const { blocks, error: blockError } = useBlocksFromTimestamps([t24, t48, tWeek])

  // index on active network
  const [activeNetwork] = useActiveNetworkVersion()
  const indexedPrices = prices?.[activeNetwork.id]

  const formattedBlocks = useMemo(() => {
    if (blocks) {
      return blocks.map((b) => parseFloat(b.number))
    }
    return undefined
  }, [blocks])

  useEffect(() => {
    async function fetch() {
      const { data, error } = await fetchEthPrices(formattedBlocks as [number, number, number], dataClient)
      if (error || blockError) {
        setError(true)
      } else if (data) {
        setPrices({
          [activeNetwork.id]: data,
        })
      }
    }
    if (!indexedPrices && !error && formattedBlocks) {
      fetch()
    }
  }, [error, prices, formattedBlocks, blockError, dataClient, indexedPrices, activeNetwork.id])

  return prices?.[activeNetwork.id]
}
