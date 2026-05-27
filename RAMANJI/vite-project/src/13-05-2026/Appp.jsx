// import React, { useState } from 'react'

// function Appp() {
//     const [todos, setTodos]=useState([])
//     const [input ,setInput]=useState("")

//     const add=()=>{
//         if (input==="")return;
//         setTodos([...todos,input])
//         setInput("")
//     }

//     const remove=(indexvalue)=>{
//       const updatedvalue=todos.filter((todo,index)=>{
//         return index!==indexvalue;
//       })
//       setTodos(updatedvalue)
//     }
//   return (
//     <div>
//       <input 
//       type="text" placeholder='enter the item' value={input}
//       onChange={(e)=>setInput(e.target.value)}/>

//       <button onClick={add}> add</button>

//       <ul>
//         {todos.map((todo,index)=>(
//             <li key={index}>{todo}  
//             <button onClick={()=>remove(index)}>delete</button>
//             </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default Appp


import React, { useEffect, useState } from 'react'

function Appp() {
    const [todos, setTodos]=useState(()=> {
        return JSON.parse(localStorage.getItem("todos")) || []
    })
    const [input ,setInput]=useState("")

    const add=()=>{
        if (input==="")return;
        setTodos([...todos,input])
        setInput("")
    }

    const remove=(indexvalue)=>{
      const updatedvalue=todos.filter((todo,index)=>{
        return index!==indexvalue;
      })
      setTodos(updatedvalue)
    }

     useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

  return (
    <div>
      <input 
      type="text" placeholder='enter the item' value={input}
      onChange={(e)=>setInput(e.target.value)}/>

      <button onClick={add}> add</button>

      <ul>
        {todos.map((todo,index)=>(
            <li key={index}>{todo}  
            <button onClick={()=>remove(index)}>delete</button>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Appp

