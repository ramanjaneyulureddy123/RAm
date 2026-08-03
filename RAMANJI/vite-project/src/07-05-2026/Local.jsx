import React, { useContext, useState } from 'react'
import { context } from './Gobal';

function Local() {
    let {b,setb}=useContext(context)
    console.log(b)

    const [a, setA]=useState(0)

    const [input, setInput]=useState("")

     const [dark, setDark] = useState(false);
        //   console.log(a)

    const handleClick = () => {
        setA(a + 1)
        console.log(a)
    }
  return (

    

    <div style={{backgroundColor:dark?"black":"white",
                    color : dark ?"white":"black",
                    height:"100vh"
                }}>
      <h2>{a}</h2>
      {/* <button onClick={()=>setA(a+1)}> increment</button> */}

       <button onClick={handleClick}>
                increment
            </button>

            <input
            type="text"
            value={input}
            onChange={(e)=>setInput(e.target.value)}/>
            <h1>{input}</h1>

                
                    <h1>{dark ? "dark mode":"light mode"}</h1>
<button onClick={()=>setDark(!dark)}> toggle </button>


<button onClick={()=>setb(b+1)}>click</button>
<h1>{b}</h1>
    </div>
  )
}

export default Local
