import React, { Component } from 'react';
// import ButtonContext from '../Context/ButtonContext';
// import UserContext from '../Context/UserContext';

export class Navigation extends Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}

export default Navigation;
