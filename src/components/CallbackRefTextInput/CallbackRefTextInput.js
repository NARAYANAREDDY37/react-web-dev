import React, { Component } from 'react';

export class CallbackRefTextInput extends Component {
  constructor(props) {
    super(props);
    //creating callbackRefText
    this.textInput = null;
    this.inputRef = (el) => {
      this.textInput = el;
    };
  }

  componentDidMount() {
    console.log(this.inputRef);
    this.textInput.focus();
    this.textInput.value = 'Callback Ref';
  }

  render() {
    return (
      <div className='my-3'>
        <h2>Callback Ref Input</h2>
        <input
          type='text'
          className='border border-gray-500'
          ref={this.inputRef}
        />
      </div>
    );
  }
}

export default CallbackRefTextInput;
