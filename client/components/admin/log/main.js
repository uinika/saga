import React from 'react';

class AdminLog extends React.Component {
  componentDidMount() {
    console.log('AdminLog');
  };
  render() {
    return (
      <div id='admin-log'>
        <h1>AdminLog</h1>
      </div>
    );
  }
};

export default AdminLog;
