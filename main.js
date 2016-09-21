import './main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MaterialComponent from './src/js/component-owner';

// provides onTouchTap() to all React components
injectTapEventPlugin();

export default class MyComponent {


  constructor(config) {

    this.init(config);
  }

  init(config) {

    ReactDOM.render(
      <MaterialComponent data={config} />,
      document.getElementById(config.elementId)
    );
  }

}

document.body.addEventListener('o.InitMyComponent', e => new MyComponent(e.detail));
