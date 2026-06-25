import { useRef } from 'react';
import './App.css'
import { addTodo, deleteTodo } from './Redux/Reducers/Todo.reducer';
import { toggleTheme } from './Redux/Reducers/Theme.reducer.js';
import { useDispatch, useSelector } from 'react-redux';
import useOnlineStatus from './Hooks/useOnlineStatus';
import Status from './status';

function App() {
  const isOnline = useOnlineStatus();
  const dispatcher = useDispatch();
  const { todos = {}, theme = {} } = useSelector(state => state);
  const { data = []  } = todos;
  const { type = "" } = theme;
  const inputRef = useRef(null);

  function onAdd(e) {
    e.preventDefault();
    const task = inputRef.current.value;
    if (task) {
      dispatcher(addTodo(task));
    } else {
      alert("There is no task");
    }
  }

  function onDelete(e, task = '') {
    e.preventDefault();
    if(task) {
      dispatcher(deleteTodo(task))
    }
  }

  return (
    <>
      <h1>Redux-Dev-Tools</h1>
      <p>Todo App</p>
      <p>App theme {type}</p>
      <p>Network status {isOnline ? "Online" : "Offline"}</p>
      <Status />
       <button onClick={() => dispatcher(toggleTheme('system'))}>System</button>
       <button onClick={() => dispatcher(toggleTheme('dark'))}>Dark</button>
       <button onClick={() => dispatcher(toggleTheme('light'))}>Light</button>
      <div>
              <input ref={inputRef} placeholder="Enter your task" />
              <button onClick={onAdd}>Add</button>
      </div>
      <div>
              <ul>
                    {data.map((todo, index) => <div key={index}>
                      <li>{todo}</li>
                      <button onClick={(e) => onDelete(e, todo)}>x</button>
                      </div>)}
              </ul>
      </div>
    </>
  )
}

export default App;
