import React, { useState } from 'react'

function Todolist() {
const [text, setText]=useState("")
const[todos,setTodos]=useState([])

// add task 
function addTask(){
    if(text === "") return;

    setTodos([...todos, text])
    setText("")
}

// deletetask 

function deleteTask(index){
    const newTodos=todos.filter((item,i)=> i !== index)
    setTodos(newTodos)
}

// clear all tasks 

function clearAll(){
    setTodos([])
}


  return (
    <div>
      <h1>Todo List</h1>
      <input  
         type="text"
         placeholder="enter task"
         value={text}
         onChange={(e)=>setText(e.target.value)}
      
      />
      

      <button onClick={addTask}>Add</button>
            <button onClick={clearAll}>clearAll</button>

<ul>
    {todos.map((todo,index)=>(
    <li key={index}>
        {todo}
        <button onClick={()=>deleteTask(index)}  style={{ marginLeft: "10px" }}
> delete</button>
    </li>
    ))}
</ul>
    </div>
  )
}

export default Todolist




