import { createAction } from 'redux-actions'
import { url, http, validate } from '../../common/http'
import { message } from 'antd'

/** Create */
export const addclusterName=createAction('ADD_CLUSTER_NAME')
export const addResourceUrl=createAction('ADD_RESOURCE_URL')

//export const createResult = createAction('CREATE_RESULT')
// export const create = httpParam => {
//   return dispatch => {
//     http({
//       url: '/sys/account',
//       method: 'POST',
//       param: httpParam
//     })
//     .then(data => {
//       dispatch(createResult(data))
//       if(validate(data, 200)) {
//         message.success(data.head.message, 3)
//         return data.head.status
//       }
//       else if(validate(data, 201)) {
//         message.error(data.head.message, 3)
//         return data.head.status
//       }
//     })
//     .then(status => {
//         if(200 === status){
//           dispatch(find({current: 1, pageSize: 12}))
//           dispatch(createModal(false))
//         }
//         else if(201 === status){
//           dispatch(createModal(true))
//         }
//     })
//     .catch( (error) => console.warn(error) )
//   }
// }
