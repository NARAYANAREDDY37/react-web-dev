import React, { Component } from 'react';

function WithCategory(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        categories: [
          'category1',
          'category2',
          'category3',
          'category4',
          'category5'
        ]
      };
    }
    render() {
      return (
        <div>
          <WrappedComponent {...this.props} {...this.state} />
        </div>
      );
    }
  };
}

export default WithCategory;
