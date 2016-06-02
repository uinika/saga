import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Dashboard extends React.Component {
  render() {
    return (
				<MuiThemeProvider>
			    <RaisedButton label="Default" />
			  </MuiThemeProvider>
    );
  }
}

export default Dashboard;
