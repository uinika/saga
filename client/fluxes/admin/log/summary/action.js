import { createAction } from 'redux-actions'
import { Fetch, Validator } from '../../../../common/http'

/* Find */
export const logSummaryFindFilter = createAction('LOG_SUMMARY_FIND_FILTER')
export const logSummaryFind = createAction('LOG_SUMMARY_FIND', async httpParam => {
  const data = await Fetch({
    url: '/sys/logs',
    method: 'GET',
    query: httpParam
  });
  if(Validator(data, 200)){
    return data.body
  }
})
