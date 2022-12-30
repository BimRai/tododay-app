import React, { useState } from 'react';
import './App.css';

function App() {

  const [newToDo, setNewToDo] = useState("");
  const [items, setItems] = useState([]);

  function addItem() {

    if (!newToDo) {
      alert("You didn't type your list!")
      return (newToDo === [])
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newToDo
    };
    setItems(oldList => [...oldList, item]);
    setNewToDo("");
  }

  function deleteItem(id) {
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray);
  }

  console.log(items);

  return (
    <div className="App">
      <h1>ToDoDay</h1>
      <input
        type="text"
        placeholder='Create a new ToDo...'
        value={newToDo}
        onChange={e => setNewToDo(e.target.value)}
      />
      <button className='addButton' onClick={() => addItem()}>Add</button>

      <ul>
        {items.map(item => {
          return (
            <li key={item.id}>{item.value} <button className='deleteButton' onClick={() => deleteItem(item.id)}>❌</button> </li>
          )
        })}
      </ul>

    </div >
  );
}

export default App;
