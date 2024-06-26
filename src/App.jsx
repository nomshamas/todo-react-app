import { useState } from "react";
import MoonIcon from './assets/icon-moon.svg'
import './styles/main.scss';
import TodoList from './components/TodoList';

function App() {

  const [todoTitle, setTodoTitle] = useState("");
  const [displayText, setDisplayText] = useState("");

  const handleChange = (e) => {
    setTodoTitle(e.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setDisplayText(todoTitle);
    setTodoTitle({});
  }

  return (
    <div className="wrapper">
      <div className='main'>

        <div className='header-row'>
          <h1 className='header-title'>Todo</h1>
          <img src={MoonIcon} alt="Moon" className='header-btn-moon' />
        </div>

        <form onSubmit={handleSubmit} className='add-todo'>
          <button className='add-todo-btn'></button>
          <input type="text" 
          className='add-todo-text' 
          placeholder='Create a new todo..'
          value={todoTitle}
          onChange={handleChange} />
        </form>

        <p>{displayText}</p>

        <div className='todo-wrapper'>
          <div className='todo-list'>
            <TodoList />
          </div>
          <div className='controls'>
            <p className='controls-info'>5 items left</p>
            <ul className='controls-list'>
              <li><button className='active'>All</button></li>
              <li><button>Active</button></li>
              <li><button>Completed</button></li>
            </ul>
            <button className='controls-clear'>Clear Completed</button>
          </div>
        </div>

        <p className='footer-title'>Drag and drop to reorder list</p>

      </div>
    </div>
  );
}

export default App;
