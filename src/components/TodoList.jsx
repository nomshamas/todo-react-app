import React from 'react';

function TodoList(props) {
    return (
      
      <div className='todo'>
      {/* <button className='todo-btn btn-active' >
        <span className='todo-btn-check-icon d-block'>✔</span>
      </button> */}
      <p className='todo-title'>{props.title}</p>
      </div>
    );
}

export default TodoList;