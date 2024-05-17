import { useState } from 'react'

import './App.css'
import Form from './components/Form';
import Heading from './components/Heading';
import List from './components/List';

function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  function handleSubmit(e){
    // newTask = e.target.value;
      setList((prevValue) =>[...prevValue, task]);
      setTask("");
      e.preventDefault();
      console.log(list);
      

  }

  function handleRemove(ind){
    setList((prevValue) =>
      {return [...prevValue].filter((task, index) => {return index!=ind})})

  }

  return (
    <div id="appMain">
      
      <Heading />
      <div id="appContainer">
        <Form 
        task={task} 
        setTask={setTask}
        handleSubmit={handleSubmit}        
        />
        <ul>
            {list.map((task, index) =>
        <List task={task} handleRemove={handleRemove} key={index} index={index}/>)}
        </ul>
        
      </div>
      </div>
    
  )
}

export default App
