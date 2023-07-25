import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { parse } from 'qs'
import { AppDispatch } from '../state'
import { updateUserDarkMode } from '../state/user/actions'
import { useLocation } from 'react-router-dom'

export default function DarkModeQueryParamReader(): null {
  const { search } = useLocation()
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    if (!search) return
    if (search.length < 2) return

    const parsed = parse(search, {
      parseArrays: false,
      ignoreQueryPrefix: true,
    })

    const theme = parsed.theme

    if (typeof theme !== 'string') return

    if (theme.toLowerCase() === 'light') {
      dispatch(updateUserDarkMode({ userDarkMode: false }))
    } else if (theme.toLowerCase() === 'dark') {
      dispatch(updateUserDarkMode({ userDarkMode: true }))
    }
  }, [dispatch, search])

  return null
}
