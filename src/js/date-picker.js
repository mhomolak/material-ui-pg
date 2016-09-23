import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 30
  }
}

const DatePickerExample = () => (
  <MuiThemeProvider>
    <div style={styles.container}>
      <DatePicker hintText="Portrait DatePicker" container="inline"/>
      <DatePicker hintText="Landscape DatePicker" container="inline" mode="landscape"/>
    </div>
  </MuiThemeProvider>
)

export default DatePickerExample;
