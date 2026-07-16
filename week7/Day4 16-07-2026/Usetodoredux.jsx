import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo } from './TodoRedux'

function Usetodoredux() {

    const [text,setText]=useState("")

    const todo=useSelector(state=>state.todo)

    const dispatch=useDispatch()
  return (
    <div>
      <h2>Todo App</h2>

      <input  
      value={text}
      onChange={(e)=>setText(e.target.value)}
      />

      <button onClick={()=>{dispatch(addTodo(text));
         setText("")}}> Add</button>
      

      {
        todo.map((todo, index)=>(
            <div key={index}>
                <p>{todo}</p>

                <button onClick={()=>dispatch(deleteTodo(index))}>Delete</button>

                </div>
        ))
      }
    </div>
  )
}

export default Usetodoredux
