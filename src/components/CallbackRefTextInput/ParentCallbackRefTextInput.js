import React, { Component } from 'react';
import CallbackRefTextInput from './CallbackRefTextInput';
export class ParentCallbackRefTextInput extends Component {
  constructor(props) {
    super(props);
    this.textInput = null;
  }

  componentDidMount() {
    this.textInput.focus();
    this.textInput.value = 'Iam from parentCallbackRef';
  }
  render() {
    return (
      <div>
        <CallbackRefTextInput inputRef={(el) => (this.textInput = el)} />
      </div>
    );
  }
}

export default ParentCallbackRefTextInput;
