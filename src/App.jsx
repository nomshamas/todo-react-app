import { useState, useEffect } from "react";
import MoonIcon from './assets/icon-moon.svg';
import './styles/main.scss';

function App() {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoList, setTodoList] = useState(() => {
    return localStorage.getItem("mytododata") ? JSON.parse(localStorage.getItem("mytododata")) : [];
  });
  const [filter, setFilter] = useState('All');

  const handleChange = (e) => {
    setTodoTitle(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (todoTitle.trim() !== "") {
      const newTodo = { id: Date.now(), title: todoTitle, completed: false };
      const updatedTodoList = [...todoList, newTodo];
      setTodoList(updatedTodoList);
      setTodoTitle("");
    }
  };

  const handleToggleComplete = (id) => {
    const updatedTodoList = todoList.map((td) =>
      td.id === id ? { ...td, completed: !td.completed } : td
    );
    setTodoList(updatedTodoList);
  };

  const handleClearCompleted = () => {
    const updatedTodoList = todoList.filter((td) => !td.completed);
    setTodoList(updatedTodoList);
  };

  const handleClearAll = () => {
    setTodoList([]);
  };

  const filteredTodoList = todoList.filter((td) => {
    if (filter === 'Active') return !td.completed;
    if (filter === 'Completed') return td.completed;
    return true;
  });

  useEffect(() => {
    localStorage.setItem("mytododata", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="wrapper">
      <div className='main'>
        <div className='header-row'>
          <h1 className='header-title'>Todo</h1>
          <img src={MoonIcon} alt="Moon" className='header-btn-moon' />
        </div>

        <form className='add-todo' onSubmit={handleSubmit}>
          <button type="submit" className='add-todo-btn'></button>
          <input type="text" className='add-todo-text' placeholder='Create a new todo..' value={todoTitle} onChange={handleChange} autoFocus />
        </form>

        <div className='todo-wrapper'>
          <div className='todo-list'>
            {filteredTodoList.map((td) => (
              <div key={td.id} className='todo'>
                <button className={`todo-btn ${td.completed ? 'btn-completed' : 'btn-active'}`} onClick={() => handleToggleComplete(td.id)}>
                  {td.completed && <span className='todo-btn-check-icon d-block'>✔</span>}
                </button>
                <p className={`todo-title ${td.completed ? 'todo-completed' : ''}`}> {td.title}</p>
              </div>
            ))}
          </div>

          <div className='controls'>
            <p className='controls-info'>{todoList.filter(td => !td.completed).length} items left</p>
            <ul className='controls-list'>
              <li><button className={filter === 'All' ? 'active' : ''} onClick={() => setFilter('All')}>All</button></li>
              <li><button className={filter === 'Active' ? 'active' : ''} onClick={() => setFilter('Active')}>Active</button></li>
              <li><button className={filter === 'Completed' ? 'active' : ''} onClick={() => setFilter('Completed')}>Completed</button></li>
            </ul>
            <button className='controls-clear' onClick={handleClearCompleted}>Clear Completed</button>
            <button className='controls-clear-all' onClick={handleClearAll}>Clear All</button>
          </div>
        </div>

        <p className='footer-title'>Manage your tasks efficiently</p>
      </div>
    </div>
  );
}

export default App;
