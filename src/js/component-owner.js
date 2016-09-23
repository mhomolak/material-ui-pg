import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 30
  }
};

class MaterialComponent extends React.Component {

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
          label="I'm a drawer"
          onTouchTap={this.handleToggle}
          />
          <Drawer open={this.state.open}>
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

export default MaterialComponent;
