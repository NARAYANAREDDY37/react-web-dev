import React, { Component } from 'react';
import Cat from './Cat';
export class MouseWithCat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0
    };
  }

  handleMouseMove = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  };

  render() {
    return (
      <div
        style={{ height: '100vh', width: '100vw' }}
        onMouseMove={this.handleMouseMove}
      >
        <div>Please move the mouse pointer</div>
        <div>
          The mouse pointer position is x: {this.state.x}, y: {this.state.y}
        </div>
        <Cat mouse={this.state} />
      </div>
    );
  }
}

export default MouseWithCat;
