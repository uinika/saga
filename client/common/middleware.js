export const httpMiddleware = store => next => action => {
  if (!action.promise) {
    return next(action)
  }
  function makeAction(ready, data) {
    let newAction = Object.assign({}, action, {
      ready
    }, data)
    delete newAction.promise
    return newAction
  }
  next(makeAction(false))
  return action.promise.then(
    result => next(makeAction(true, {
      result
    })),
    error => next(makeAction(true, {
      error
    }))
  )
}
