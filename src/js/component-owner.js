import React, {PropTypes} from 'react';

class MaterialComponent extends React.Component {

  static propTypes = {
    data: PropTypes.shape({
      elementId: PropTypes.string.isRequired,
      locale: PropTypes.string
    })
  };

  constructor(props) {

    super(props);

    this.state = {
      text: ''
    };
  }

  render() {

    return (
      <div className="pe-inlineblock">
        <p>test</p>
      </div>
    )
  }

}

export default MaterialComponent;
