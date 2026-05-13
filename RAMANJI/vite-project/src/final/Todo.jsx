import React, { useState } from 'react'

function Todo() {
    const [todos, setTodos]=useState([])
    const[input,setInput]=useState("")

    const addTodo=()=>{
        if(input==="")return;
        setTodos([...todos,input])
        setInput("")
    }
  return (
    <div>
      <h1>todo app</h1>
      <input 
      type="text"
      value={input}
      placeholder="enter todo"
      onChange={(e)=>setInput(e.target.value)}/>

      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo,index)=>(
            <li key={index}> {todo}</li>
        ))}
      </ul>
    </div>
  )
}

export default Todo

