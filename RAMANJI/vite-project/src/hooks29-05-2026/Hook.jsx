import React, { useState } from 'react'

function Hook() {
    const[count ,setCount]=useState(0)

    const [show,setShow]=useState(false)

    const [dark, setDark]=useState(false)

    const [text, setText]=useState("")

    const[showpass, setShowpass]=useState(false)
    const[pass,setPass]=useState("")

    const [task, setTask]=useState("")
    const [tasks, setTasks]=useState([])

    const additem=()=>{
        if(task.trim() !==""){
            setTasks([...tasks,task]);
            setTask("")
        }
    }
     

    const increment=()=>{
        setCount(count+2)
    }

    const decrement=()=>{
        if(count>0){
            setCount(count-1)
        }
    }

    const reset =()=>{
        setCount(0)
    }

  return (
    <div style={{backgroundColor: dark ?"black":"white",
                  color: dark ? "white":"black",
                  height:"100vh",
                  padding:"20px"
    }}>

        <h1>toggle mode</h1>
        <button onClick={()=>setDark(!dark)}>
            {dark ? "light mode": "dark mode"}
        </button>
{/* --------------------------- */}
        
        <input type={showpass?"text":"password"}
        value={pass}
        placeholder='password type'
        onChange={(e)=>setPass(e.target.value)}
        />
        <button onClick={()=>setShowpass(!showpass)}>{showpass ?"hide":"show"}</button>

{/* -------------------------- */}

<input type="text"
value={text}
placeholder='use type '
onChange={(e)=>setText(e.target.value)}
/>

<h1>{text}</h1>
<h2>Character:{text.length}</h2>
{/* ---------------------------- */}
        <h1>Count:{count}</h1>
      {/* <button onClick={()=>setCount(count+1)}>increment</button>
    <button onClick={()=>setCount(count-1)}>decrement</button> */}

<button onClick={increment}>INC</button>

<button onClick={decrement}>DEC</button>

<button onClick={reset}>RESET</button>
{/* ------------------- */}

<button onClick={()=>setShow(!show)}> 
    {show ?  "hide" :"show"}
</button>
{show && <h2>hello react welcome</h2>}
{/* ------------------------ */}
      <h2>Todo List</h2>

      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
<button onClick={additem}> add</button>
<ul>
    {tasks.map((item,index)=>(
     <li key={index}> {item}</li>   
    ))}
</ul>

    </div>
  )
}

export default Hook
