import React, { Component } from 'react';
import RefsTextInput from './RefsTextInput';

export class ParentRefTextInput extends Component {
  constructor(props) {
    super(props);
    this.ComponentRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.ComponentRef.current.focusInput('Calling from parent'));
  }

  render() {
    return (
      <div>
        <RefsTextInput ref={this.ComponentRef} />
      </div>
    );
  }
}

export default ParentRefTextInput;
