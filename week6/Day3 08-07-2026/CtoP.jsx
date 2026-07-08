import React, { useState } from 'react'

function CtoP() {

    const createfunction=(name)=>{
        console.log(name)
    }

    // Update the Parent component's State based on Child interactions.
    const [cartCount, setCartCount]=useState(0)

    const addToCart =()=>{
      setCartCount(cartCount+1)
    }

    // Create examples using button clicks and form inputs to send data to the Parent.
    const [name, setName]=useState("")
    const getName=(value)=>{
      setName(value)
    }

  return (
    <div>
      <Child sendData={createfunction} />

      {/* ----------  */}

      <h2>Cart Items :{cartCount}</h2>
      <Product addItem={addToCart}/>

      {/* ------------------  */}
      <h2>Form input</h2>
      <p>{name}</p>
      <Form formdata={getName}/>
    </div>
  )
}

function Child({sendData}){
    const name="Anji Reddy";
    return(
        <div>
<button onClick={()=>sendData(name)}> send to parent</button>
        </div>
    )
}

function Product({addItem}){
  return (
    <div>
<button onClick={addItem}>add to cart</button>
    </div>
  )
}

function Form({formdata}){
  const [input, setInput]=useState("")
  return(
    <div>
<input  type="text" 
        placeholder="enter name"
          value={input}
          onChange={(e)=>setInput(e.target.value)}
  />

  <button onClick={()=>formdata(input)}>submit</button>
    </div>
  )
}

export default CtoP
