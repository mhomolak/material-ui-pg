import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 30
  }
}

function test1() {
  alert('Portrait date picker is focused!');
}

function test2() {
  alert('Landscape date picker is focused!')
}
const DatePickerExample = () => (
  <MuiThemeProvider>
    <div style={styles.container}>
      <DatePicker onFocus={test1} hintText="Portrait DatePicker" container="inline"/>
      <DatePicker onFocus={test2} hintText="Landscape DatePicker" container="inline" mode="landscape"/>
    </div>
  </MuiThemeProvider>
)

export default DatePickerExample;
