import React, { Component } from 'react';
import UserDetails from './UserDetails';

export class UserPropTypes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        { id: 1, name: 'John' },
        { id: 2, name: 'George' },
        { id: 3, name: 'Joe' }
      ]
    };
  }

  render() {
    return (
      <div>
        <div className='font-bold text-xl'>
          <h2>User Prop Types</h2>
        </div>
        <div className='flex'>
          {this.state.users.map((user) => {
            return <UserDetails name={user.name} id={user.id} key={user.id} />;
          })}
        </div>
      </div>
    );
  }
}

export default UserPropTypes;
