import React, { Component } from 'react';

export class RefsTextInput extends Component {
  constructor(props) {
    super(props);
    //creating ref for the input element
    this.inputRef = React.createRef();
  }

  focusInput = (value) => {
    console.log(this.inputRef.current);
    this.inputRef.current.focus();
    this.inputRef.current.value = value;
  };

  render() {
    return (
      <div className='my-3'>
        <h2>ref Text Input</h2>
        <div>
          <input
            type='text'
            ref={this.inputRef}
            className='border border-gray-500'
          />
        </div>
        <div className='my-3'>
          <button
            className='bg-red-500 text-white px-2 py-1'
            onClick={this.focusInput.bind(this, 'Calling from child')}
          >
            Focus Input
          </button>
        </div>
      </div>
    );
  }
}

export default RefsTextInput;
