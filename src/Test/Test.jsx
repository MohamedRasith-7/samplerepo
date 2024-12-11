import React ,{useState} from 'react'

const Test = () => {
  
    const [Task,SetTask]= useState([]);
    const [newTask,SetNewTask]=useState('');
   function addTask(){
    SetTask([newTask])
   }
  
  return (
    
    <>
    <div >
      <h1>To-Do List</h1>
      <input type="text" value={newTask} onChange={(e) => SetNewTask(e.target.value)} />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {Task.map((item,index)=>{
          return(
            <li key={index}>{item}</li>
          )
        })}
      </ul>

        
    </div>
    </>

        )
    }


    


export default Test
