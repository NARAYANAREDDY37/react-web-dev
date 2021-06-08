import React from 'react';

function Button(props) {
  return (
    <div className="my-3">
      <button className='bg-red-400 text-white px-5 py-3 rounded-full hover:bg-red-600'>{props.name}</button>
    </div>
  );
}

export default Button;
