import React, { Component } from 'react';
import TableColumns from './TableColumns';

export class TableFragment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        { id: 1, name: 'George' },
        { id: 2, name: 'Alex' },
        { id: 3, name: 'Bobby' }
      ]
    };
  }

  render() {
    return (
      <div className='my-3'>
        <h2>Table Fragment Data</h2>
        <table>
          <thead>
            <tr>
              <th className='border border-blue-500'>ID</th>
              <th className='border border-blue-500'>Name</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user) => {
              return (
                <React.Fragment key={user.id}>
                  <tr>
                    <TableColumns user={user} />
                  </tr>
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TableFragment;
