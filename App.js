import { useState } from 'react';

function App(){
  const [Todo,setTodo] = useState([]);
  const [Task,setTask] = useState('');

  const Arrlist = () =>{
    if (Task.trim() !== '') {
      setTodo([...Todo,Task]);
      setTask('')
    }
  }

  const deleteTodo=(index) =>{
  const newTodo=[...Todo];
  newTodo.splice(index, 1);
  setTodo(newTodo);
  }
   const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
      Arrlist();
    }
  };
  return(
    <div className="App">
      <h1>Todo</h1>
      <input
      type="text"
      value={Task}
      onChange={(e) => setTask(e.target.value)}
      onKeyDown={handleKeyDown}
      />
      <button onClick={Arrlist}>
      검색
      </button>
      <ul>
        {Todo.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={()=>deleteTodo(index)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  )
};
//자퇴 신청서
//자살하는법 
export default App;