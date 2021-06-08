import React, { Component } from 'react'

export class HelloWorld extends Component {
  render() {
    return (
      <div>
        <div>{this.props.text}</div>
      </div>
    )
  }
}

export default HelloWorld
