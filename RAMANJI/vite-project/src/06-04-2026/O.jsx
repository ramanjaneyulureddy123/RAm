import React from 'react'

import useCustomer from './useCustomer'

function O() {
  function* demo(){
    yield "hello"
    yield "world"
  }
  const grn=demo()
  console.log(grn.next())
    console.log(grn.next())
  console.log(grn.next())
  console.log(grn.next())

  //     console.log(grn.next())
  // console.log(grn.next())

    const{ count, inc, dec}=useCustomer()
  return (
    <div>
      
        <p> this is hook content</p>
        <h1>{count}</h1>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
    </div>
  )
}

export default O
