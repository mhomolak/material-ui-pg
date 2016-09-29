import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const AppBarExample = () => (
  <MuiThemeProvider>
    <AppBar
      titleStyle={{
        paddingLeft: 15
      }}
      className="app-bar-test"
      title="This is an app-bar"
      iconElementLeft={<IconButton><NavigationClose /></IconButton>}
      iconElementRight={
        <IconMenu
        iconButtonElement={
          <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        >
        <MenuItem primaryText="Thing 1" />
        <MenuItem primaryText="Thing 2" />
        <MenuItem primaryText="Thing 3" />
        </IconMenu>
    }
    />
  </MuiThemeProvider>
);

export default AppBarExample;
