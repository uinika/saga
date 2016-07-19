import React from 'react';
import { Url, Fetch, Validator } from '../../common/http';

let Login = React.createClass({
  render(){
    return (
      <img src={Url+'/validatecode'} height='33' width='88'  />
    );
  }
})

export default Login;
