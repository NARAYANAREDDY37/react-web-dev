import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class UserDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className='border border-gray-500 p-4 mx-2 my-3'>
        <div>ID: {this.props.id}</div>
        <div>Name: {this.props.name}</div>
      </div>
    );
  }
}

export default UserDetails;

//writing validations
UserDetails.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
};

//setting default values if you don't pass props
UserDetails.defaultProps = {
  name: 'default name'
}