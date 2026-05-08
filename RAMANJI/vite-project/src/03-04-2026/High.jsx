import React from 'react'

function High(Componenet) {
    return function hello(props){

   
  return (
    <div>
      <h1>hello higher oreder</h1>
      <Componenet {...props}/>
    </div>
  )
}
} 
export default High
