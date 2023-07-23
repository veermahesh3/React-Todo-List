import React, { useState } from 'react';
import './App.css';
import List from './List';

const App = () => {
  const [name, setName] = useState();
  const [items, setItems] = useState([]);

  function inputR(event) {
    setName(event.target.value);
  }
  const listItem = () => {
    setItems((old) => {
      return [...old, name];

    });
    setName("");
  }
  const deleteItem=(id)=>{
// console.log("deleted");

setItems((oldItems)=>{
  return oldItems.filter((arrElem,index)=>{
    return index !== id;
  })
})
  }
  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <br />
          <h1>Todo List</h1>
          <div>
            <input type="text" value={name} onChange={inputR} placeholder='Add a Item' />
            <button className='addbtn' onClick={listItem}>+</button>
          </div>
          <ol >

            {items.map((value, index) => {
              return <List key={index}
               id={index}
                text={value}
                onSelect={deleteItem}
                 />
            })}

          </ol>

        </div>
      </div>
    </>
  )
}
export default App;