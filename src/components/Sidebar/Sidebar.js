import React, { Component } from 'react';
// import ButtonContext from '../Context/ButtonContext';
// import Navigation from '../Navigation/Navigation';

export class Sidebar extends Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}

export default Sidebar;
