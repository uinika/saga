import React from 'react';

class AdminModule extends React.Component {
  componentDidMount() {
    console.log('AdminModule');
  };
  render() {
    return (
      <div id='admin-module'>
        <h1>AdminModule</h1>
      </div>
    );
  }
};

export default AdminModule;
