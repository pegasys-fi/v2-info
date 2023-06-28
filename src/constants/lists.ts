// used to mark unsupported tokens, these are hosted lists of unsupported tokens

export const UNSUPPORTED_LIST_URLS: string[] = []
// export const ROLLUX_LIST = 'https://gateway.pinata.cloud/ipfs/QmTD2QoWACBXdJ78R6EwK7qUkGpLw7x6Ffvcq1FSQ2NRYo'
// TODO: review link to list on rollux
export const ROLLUX_LIST =
  'https://raw.githubusercontent.com/pegasys-fi/default-token-list/main/build/pegasys-default.tokenlist.json'
// lower index == higher priority for token import
export const DEFAULT_LIST_OF_LISTS: string[] = [
  ROLLUX_LIST,
  ...UNSUPPORTED_LIST_URLS, // need to load unsupported tokens as well
]

// default lists to be 'active' aka searched across
export const DEFAULT_ACTIVE_LIST_URLS: string[] = [ROLLUX_LIST]
