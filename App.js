import React, { useState } from 'react';

function App() {
  const [Todo, setTodos] = useState([]);
  const [Task, setTask] = useState('');

  const addTodo = () => {
    if (Task.trim() !== '') {
      setTodos([...Todo, Task]);
      setTask('');
    }
  };

  const deleteTodo = (index) => {
    const newTodos = [...Todo];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>Todo</h1>
      <input
        type="text"
        value={Task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTodo}>
        검색
      </button>
      <ul>
        {Todo.map((Todo, index) => (
          <li key={index}>
            {Todo}
            <button onClick={() => deleteTodo(index)}>
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
