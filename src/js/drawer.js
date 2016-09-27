import React from 'react';
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { blue600, lime500, tealA400 } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 30
  }
};

class DrawerExample extends React.Component {

  constructor() {

    super();

    this.state = { open: false };
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {

    return (
      <MuiThemeProvider>
        <div style={styles.container}>
          <RaisedButton
          style={{
            backgroundColor: blue600
          }}
          label="Drawer trigger"
          labelColor={tealA400}
          onTouchTap={this.handleToggle}
          />
          <Drawer open={this.state.open}
          containerStyle={{
            backgroundColor: lime500
          }}
          >
          <MenuItem>Alright</MenuItem>
          <MenuItem>Cool</MenuItem>
          <MenuItem>Many</MenuItem>
          <MenuItem>Buttons</MenuItem>
          </Drawer>
        </div>
      </MuiThemeProvider>
    )
  }

}

export default DrawerExample;
