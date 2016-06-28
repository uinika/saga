import React from 'react';

class Dashboard extends React.Component {
  componentDidMount() {
    console.log('Dashboard');
  };
  render() {
    return (
      <div id='dashboard'>
        <h1>Dashboard</h1>
      </div>
    );
  }
};

export default Dashboard;
