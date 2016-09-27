import './main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import AppBarExample from './src/js/app-bar';
import DrawerExample from './src/js/drawer';
import DatePickerExample from './src/js/date-picker';
import DialogExample from './src/js/dialog';
import ChipExample from './src/js/chip';

// provides onTouchTap() to all React components
injectTapEventPlugin();

export default class MyComponent {

  constructor(config) {

    this.init(config);
  }

  init(config) {

    ReactDOM.render(
      <div>
        <AppBarExample />
        <DrawerExample />
        <DialogExample />
        <DatePickerExample />
        <ChipExample />
      </div>,
      document.getElementById(config.elementId)
    );
  }

}

document.body.addEventListener('o.InitMyComponent', e => new MyComponent(e.detail));
