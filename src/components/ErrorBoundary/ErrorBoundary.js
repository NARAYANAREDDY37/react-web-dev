import React, { Component } from 'react';

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  //write either of these two methods to make component error boundary
  static getDerivedStateFromError() {
    console.log('get derived state from error fired');
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
    console.log('component did catch error fired');
  }
  render() {
    if (this.state.hasError) {
      return <div>An error occurred!!</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
