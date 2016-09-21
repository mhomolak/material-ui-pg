import './main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import MaterialComponent from './src/js/component-owner';

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
