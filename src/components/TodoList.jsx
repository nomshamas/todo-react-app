import React from 'react';
import closeIcon from '../assets/icon-cross.svg'

function TodoList(props) {

    return (
      <div className='todo'>
      <button className='todo-btn btn-active' >
        <span className='todo-btn-check-icon d-block'>✔</span>
      </button>
      <p className='todo-title todo-done'>Complete online Javascript course</p>
      <img className='todo-close' src={closeIcon} alt="close" />
      </div>
    );
}

export default TodoList;