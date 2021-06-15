//HOC
import React, { Component } from 'react';

export function WithForwardingRef(WrappedComponent) {
  class ForwardingRef extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <div>
          <div>
            <h2>Hoc for ForwardingRef</h2>
            <WrappedComponent ref={this.props.buttonRef} />
          </div>
        </div>
      );
    }
  }
  return React.forwardRef((props, ref) => {
    return <ForwardingRef buttonRef={ref} {...props} />;
  });
}

export default WithForwardingRef;
