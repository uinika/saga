import React from 'react';

class AdminUser extends React.Component {
  componentDidMount() {
    console.log('AdminUser');
  };
  render() {
    return (
      <div id='admin-user'>
        <h1>AdminUser</h1>
      </div>
    );
  }
};

export default AdminUser;
