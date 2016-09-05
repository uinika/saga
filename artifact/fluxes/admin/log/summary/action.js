import { createAction } from 'redux-actions'
import { http, validate } from '../../../../common/http'

/* Find */
export const logSummaryFindFilter = createAction('LOG_SUMMARY_FIND_FILTER')
export const logSummaryFind = createAction('LOG_SUMMARY_FIND', async httpParam => {
  const data = await http({
    url: '/sys/logs',
    method: 'GET',
    query: httpParam
  });
  if(validate(data, 200)){
    return data.body
  }
})
