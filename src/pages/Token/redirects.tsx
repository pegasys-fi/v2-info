import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import TokenPage from './TokenPage'
import { isAddress } from 'ethers/lib/utils'

export function RedirectInvalidToken() {
  const { address } = useParams()
  if (address && !isAddress(address)) {
    return <Navigate to={`/`} />
  }
  return <TokenPage />
}
