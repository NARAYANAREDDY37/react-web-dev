import React, { Component } from 'react';
import ForwardingRefButton from './ForwardingRefButton';

export class ParentForwardingRef extends Component {
  constructor(props) {
    super(props);

    this.buttonRef = React.createRef();
    this.state = {};
  }

  componentDidMount() {
    console.log(this.buttonRef);
    this.buttonRef.current.innerHTML = 'Hey Click';
  }

  render() {
    return (
      <div>
        <div>
          <ForwardingRefButton ref={this.buttonRef} />
        </div>
      </div>
    );
  }
}

export default ParentForwardingRef;
