import React from 'react';
import { AppBar, IconButton, IconMenu, MenuItem } from 'material-ui/';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import { grey300 } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const AppBarExample = () => (
  <MuiThemeProvider>
    <AppBar
      titleStyle={{
        backgroundColor: grey300,
        paddingLeft: 10
      }}
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
