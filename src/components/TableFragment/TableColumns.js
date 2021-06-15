import React from 'react';

function TableColumns(props) {
  return (
    <React.Fragment>
      <td className='border border-blue-500'>{props.user.id}</td>
      <td className='border border-blue-500'>{props.user.name}</td>
    </React.Fragment>
  );
}

export default TableColumns;
