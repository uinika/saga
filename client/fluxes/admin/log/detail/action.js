import { createAction } from 'redux-actions'
import { Fetch, Validator } from '../../../../common/http'

/* Find */
export const logDetailFindFilter = createAction('LOG_DETAIL_FIND_FILTER')
export const logDetailFind = createAction('LOG_DETAIL_FIND', async (pathParam, queryParam) => {
  const data = await Fetch({
    url: '/sys/logs/' + pathParam.loginName,
    method: 'GET',
    query: queryParam
  });
  if(Validator(data, 200)){
    return data.body
  }
})
