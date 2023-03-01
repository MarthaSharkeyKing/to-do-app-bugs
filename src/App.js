import React, {useState} from 'react';

import './App.css';

function App() {

  const [currentToDoText, setText] = useState(''); 
  const [todos, setTodos] = useState([]);
  const [name, setName] = useState('');

  const handleInputChange = (event) => {
    setText(event.target.value)
  }

  const handleAdd = () => {
    setTodos([...todos, {id: todos.length, title: currentToDoText}])
  }

  const handleNameChange = (event) => {
    setName(`${name} ${event.target.value}`)
  }

  return (
    <div className="App">
      <header>
        TO DO APP: 
      </header>

      <input type="text" placeholder='Enter your name' onChange={handleNameChange}></input>
      <div>Hello {name}</div>

      <input type="text" onChange={handleInputChange}></input>
      <button onClick={handleAdd}>Add</button>

      <div>Number of to dos: {todos.length}</div>

      <div className='List'>
        To Do List: 
        {todos.filter(todo => todo.id).map(todo => {
          return( 
            <div className='ListItem'>{todo.title}</div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
