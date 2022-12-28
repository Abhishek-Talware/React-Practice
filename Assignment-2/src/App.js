import './App.css';

import React ,{useState} from 'react';

function App() {

const[task,setTask]=useState("");
const[deadline,setDeadline]=useState("")
const[kaam,setKaam]=useState([])
const fn=(e)=>{
  setTask(e.target.value);
 
}
const fn2=(e)=>{
  setDeadline(e.target.value);
 
}
const dlt=(id)=>{
  // e.preventDefault();
  setKaam((kaam)=>{
    return kaam.filter((work)=>work.id!==id)
  })
}
const rem=()=>{
  setKaam([])
}
// const dlt=(id)=>{
//   const newArr={kaam.filter((index)=>index!=id)}
// }
const addTask=()=>{
  
  //  setKaam([...kaam,task]);
  //  setTask("")
  if(task && deadline)
  {
    const todo={id:new Date().getTime()

.toString(), task,deadline};
    setKaam([...kaam,todo]);
    setDeadline("")
    setTask("")
  }
}
  return (
    <div>
      {/* <ToDoInput/>
      <ToDoList/> */}
      <h1>To Do List</h1>
      <br />
      <input type="text" placeholder='Enter the task' onChange={fn} value={task}/>
      <input type="text" placeholder='Enter the deadline' onChange={fn2} value={deadline}/>
      <br />
      <br />
      <button onClick={addTask}>Add Task</button>
      {kaam.map((todo,index)=>{

        return (
          <div key={todo.id}>
        <h4>Deadline is {todo.deadline}</h4>
        <h4>Task is {todo.task}</h4>
        <button onClick={()=>{dlt(todo.id)}}>Remove</button>
        {/* <ToDoList item={task} key={index} id={index}/> */}
        </div>
        
        )
        
      })}
      <br />
      <br />
      <button onClick={rem}>CLEAR ALL</button>

    </div>
  );
}

export default App;
