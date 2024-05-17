import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
    <>
      <div>
      <Heading />
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
      
    </>
  )
}

export default App
