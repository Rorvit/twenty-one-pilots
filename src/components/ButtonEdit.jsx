import React from 'react';

function ButtonEdit(props) {
  return (
    <div>
      <button onClick={() => alert('hello')} className='edit'>Edit</button>
    </div>
  );
}

export default ButtonEdit;