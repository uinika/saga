import { createStore } from 'redux';
import { login, validateCode } from '../actions/login';
import auth from '../reducers/login';

let store = createStore(auth);

console.log(store.getState())

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

store.dispatch(login('admin', 'admin', '57023'));
store.dispatch(validateCode('/validatecode'));

unsubscribe();
