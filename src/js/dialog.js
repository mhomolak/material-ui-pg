import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 30
  },
  radioButton: {
    marginTop: 12
  }
};

export default class DialogExample extends React.Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {

    const actionButtons = [
      <FlatButton
        label="Cancel"
        className="fb-test"
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        className="fb-test"
        onTouchTap={this.handleClose}
      />
    ];

    const radioButtons = [];
    for (let i = 0; i < 30; i++) {
      radioButtons.push(
        <RadioButton
          key={i}
          value={`value${i + 1}`}
          label={`Number ${i + 1}`}
          style={styles.radioButton}
        />
      );
    }
    return (
      <MuiThemeProvider>
        <div style={styles.container}>
          <RaisedButton label="Scrolling Dialog" onTouchTap={this.handleOpen} />
          <Dialog
            titleClassName="dialog-title"
            actionsContainerClassName="dialog-container"
            bodyClassName="dialog-body"
            title="Scrolling Dialog"
            actions={actionButtons}
            modal={true}
            open={this.state.open}
            onRequestClose={this.handleClose}
            autoScrollBodyContent={true}
          >
            <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
              {radioButtons}
            </RadioButtonGroup>
          </Dialog>
        </div>
      </MuiThemeProvider>
    );
  }
}
