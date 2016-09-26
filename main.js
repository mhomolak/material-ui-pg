import './main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import DrawerComponent from './src/js/drawer';
import AppBarExample from './src/js/app-bar';
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
        <div>
          <AppBarExample />
        </div>
        <div>
          <DrawerComponent />
        </div>
        <div>
          <DatePickerExample />
        </div>
        <div>
          <DialogExample />
        </div>
        <div>
          <ChipExample />
        </div>
      </div>,
      document.getElementById(config.elementId)
    );
  }

}

document.body.addEventListener('o.InitMyComponent', e => new MyComponent(e.detail));
