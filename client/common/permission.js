export const unAuthEnter = (nextState, replace) => {
  if(!sessionStorage.token){
    replace('/login')
  }
}
