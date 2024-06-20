import MoonIcon from './assets/icon-moon.svg'
import closeIcon from './assets/icon-cross.svg'
import './styles/main.scss';
import { useState, useEffect } from 'react';

const data = [
  {
    id: '1',
    title: 'Complete online Javascript course',
    status: true
  },
  {
    id: '2',
    title: 'aaaaa',
    status: false
  },
  {
    id: '3',
    title: 'asas',
    status: false
  },
  {
    id: '4',
    title: 'asasa',
    status: false
  },
  {
    id: '5',
    title: 'asasa',
    status: true
  }
]

function App() {

  const [todoStatus, setTodoStatus] = useState(false);
  const [todoTitle, setTodoTitle] = useState("");

  function handleStatus() {
    setTodoStatus(!todoStatus);
  }

  return (
    <div className="wrapper">
      <div className='main'>

        <div className='header-row'>
          <h1 className='header-title'>Todo</h1>
          <img src={MoonIcon} alt="Moon" className='header-btn-moon' />
        </div>

        <div className='add-todo'>
          <button className='add-todo-btn'></button>
          <input type="text" className='add-todo-text' placeholder='Create a new todo..' />
        </div>

        <div className='todo-wrapper'>
          <div className='todo-list'>
            {
              data.map((item) => {
                return(
                  <div className='todo'>
                    <button className={`todo-btn ${item.status ? 'btn-active' : ''}`} key={item.id} onClick={handleStatus} >
                      <span className={`todo-btn-check-icon ${item.status ? 'd-block' : ''}`}>✔</span>
                    </button>
                    <p className={`todo-title ${item.status ? 'todo-done' : ''}`}>{item.title}</p>
                    <img className='todo-close' src={closeIcon} alt="close" />
                  </div>
                )
              })
            }
          </div>
          <div className='controls'>
            <p className='controls-info'>5 items left</p>
            <ul className='controls-list'>
              <li><a className='active'>All</a></li>
              <li><a>Active</a></li>
              <li><a>Completed</a></li>
            </ul>
            <a className='controls-clear'>Clear Completed</a>
          </div>
        </div>

        <p className='footer-title'>Drag and drop to reorder list</p>

      </div>
    </div>
  );
}

export default App;
