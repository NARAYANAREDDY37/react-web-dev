import React, { Component } from 'react';
import MouseTracker from './MouseTracker';

export class Cat extends Component {
  render() {
    return (
      /* <div
        style={{
          position: 'absolute',
          left: this.props.mouse.x,
          top: this.props.mouse.y
        }}
      >
        <img
          src='https://static.toiimg.com/thumb/msid-67586673,width-800,height-600,resizemode-75,imgsize-3918697,pt-32,y_pad-40/67586673.jpg'
          alt='cat'
          style={{ width: '200px' }}
        />
      </div> */
      <div>
        <MouseTracker
          render={(mouse) => {
            return (
              <img
                src='https://static.toiimg.com/thumb/msid-67586673,width-800,height-600,resizemode-75,imgsize-3918697,pt-32,y_pad-40/67586673.jpg'
                style={{
                  width: '200px',
                  position: 'absolute',
                  left: mouse.x,
                  top: mouse.y
                }}
              />
            );
          }}
        />
      </div>
    );
  }
}

export default Cat;
