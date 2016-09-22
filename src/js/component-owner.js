import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { deepOrange500 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500
  }
});

class MaterialComponent extends React.Component {

  constructor() {

    super();

    this.state = { open: false };
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <RaisedButton
            label="oh hey"
            onTouchTap={this.handleToggle}
          />
          <Drawer open={this.state.open}>
            <MenuItem onTouchTap={this.handleToggle}>Alright</MenuItem>
            <MenuItem onTouchTap={this.handleToggle}>Cool</MenuItem>
          </Drawer>
        </div>
      </MuiThemeProvider>
    )
  }

}

export default MaterialComponent;
