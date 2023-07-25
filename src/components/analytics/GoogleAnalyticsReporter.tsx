import { useEffect } from 'react'
import ReactGA from 'react-ga'
import { useParams } from 'react-router-dom'
interface RouteParams {
  [key: string]: string | undefined
  pathname: string
  search: string
}

// fires a GA pageview every time the route changes
export default function GoogleAnalyticsReporter(): null {
  const params = useParams<RouteParams>()
  const { pathname, search } = params

  useEffect(() => {
    ReactGA.pageview(`${pathname}${search}`)
  }, [pathname, search])
  return null
}
