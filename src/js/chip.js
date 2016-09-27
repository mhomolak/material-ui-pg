import React from 'react';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import SvgIconFace from 'material-ui/svg-icons/action/face';
import { blue100, blue900 } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
  chip: {
    margin: 4
  },
  wrapper: {
    paddingTop: 30,
    display: 'flex',
    flexWrap: 'wrap'
  }
};

function handleDelete() {
  alert('Delete button clicked.');
}

function handleTouchTap() {
  alert('You clicked the Chip.');
}

export default class ChipExample extends React.Component {

  render() {
    return (
      <MuiThemeProvider>
        <div style={styles.wrapper}>

          <Chip
          className="first-chip"
          style={styles.chip}
          >
            Text Chip /w !CSS
          </Chip>

          <Chip
            onRequestDelete={handleDelete}
            onTouchTap={handleTouchTap}
            style={styles.chip}
          >
            Deletable Text Chip
          </Chip>

          <Chip
            onTouchTap={handleTouchTap}
            style={styles.chip}
          >
            <Avatar src="http://www.avatarsdb.com/avatars/maltese_puppy.jpg" />
            Image Avatar Chip
          </Chip>

          <Chip
            onRequestDelete={handleDelete}
            onTouchTap={handleTouchTap}
            style={styles.chip}
          >
            <Avatar src="http://outofthebleuproductions.com/images/avatars/sad_german_shepherd_puppy.jpg" />
            Deletable Avatar Chip
          </Chip>

          <Chip
            onRequestDelete={handleDelete}
            onTouchTap={handleTouchTap}
            style={styles.chip}
          >
            <Avatar color="#444" icon={<SvgIconFace />} />
            SvgIcon Avatar Chip
          </Chip>

          <Chip onTouchTap={handleTouchTap} style={styles.chip}>
            <Avatar>MH</Avatar>
            Text Avatar Chip
          </Chip>

          <Chip
            backgroundColor={blue100}
            onRequestDelete={handleDelete}
            onTouchTap={handleTouchTap}
            style={styles.chip}
          >
            <Avatar color={blue100} backgroundColor={blue900}>
              MH
            </Avatar>
            Colored Chip /w inline JS
          </Chip>
        </div>
      </MuiThemeProvider>
    );
  }
}
