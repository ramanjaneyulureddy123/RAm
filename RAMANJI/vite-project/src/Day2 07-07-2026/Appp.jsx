import React, { useState } from 'react'
import Counterr from './Counterr'
import Displaysibling from './Displaysibling'
import M1 from './M1'

function Appp() {
    const [count, setCount]=useState(0)

    const increase =()=>{
        setCount(count+1)
    }
  return (
    <>
      <h1>mini React</h1>


      <M1 name="Rahul"
      course="b.Tech"
      />

      <Counterr increase={increase}/>
      <Displaysibling  total={count}/>
    </>
  )
}

export default Appp
