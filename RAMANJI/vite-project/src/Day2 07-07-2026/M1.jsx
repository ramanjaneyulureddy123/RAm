import React from 'react'
import { Header } from './M2'

function M1(props) {
    const name="anji"
  return (
    <div>
<h1>hello {props.name}</h1>
<Header name={name}/>
    </div>
  )
}

export default M1
