import React, { useState } from 'react'
import Cinput1 from './Cinput1'
import C2input from './C2input'

function P() {
    const [text,setText]=useState("")
  return (
    <div>
      <Cinput1  text={text} setText={setText}/>
      <C2input text={text}/>
    </div>
  )
}

export default P
