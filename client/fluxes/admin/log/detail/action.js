import { createAction } from 'redux-actions'
import { http, validate } from '../../../../common/http'

/* Find */
export const logDetailFindFilter = createAction('LOG_DETAIL_FIND_FILTER')
export const logDetailFind = createAction('LOG_DETAIL_FIND', async (pathParam, queryParam) => {
  const data = await http({
    url: '/sys/logs/' + pathParam.loginName,
    method: 'GET',
    query: queryParam
  });
  if(validate(data, 200)){
    return data.body
  }
})
