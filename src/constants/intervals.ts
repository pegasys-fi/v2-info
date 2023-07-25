/**
 * Constanst for historical data fetching.
 *
 */

import { ManipulateType } from 'dayjs'

export const ONE_HOUR_SECONDS = 3600

export const TimeWindow: {
  [key: string]: ManipulateType
} = {
  DAY: 'day',
  WEEK: 'week',
  MONTH: 'month',
}
