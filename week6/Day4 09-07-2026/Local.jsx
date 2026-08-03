import React, { useState } from 'react'

function Local() {
    const [count, setCount]=useState(0)

    const [show, setShow]=useState(true)

    // input change event 

    const [msg, setMsg]=useState("")
    function handleChange(event){
        setMsg(event.target.value)
    }

    // shopping cart quantity and managing object state 

    const [product, setProduct]=useState({
        name:"loptop",
        quantity:1
    })

    function increaseQuantity(){
        setProduct({
            ...product,
            quantity:product.quantity +1
        })
    }

  return (
    <div>
      <h2>Count:{count}</h2>
      <button onClick={()=>setCount(count+1)}>inc</button>
            <button onClick={()=>setCount(count-1)}>idec</button>

<button onClick={()=>setShow(!show)}>Show/Hide</button>

{show && <h2>welcome to page</h2>}

<input type="text" placeholder=" type something for input event"
  onChange={handleChange}/>

  <h3>typed:{msg}</h3>
  {/* ------------------  */}

  <h6>{product.name}</h6>
  <p>quantity:{product.quantity}</p>
  <button onClick={increaseQuantity}>inc q</button>
    </div>
  )
}

export default Local
