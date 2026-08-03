import React, { useReducer } from 'react'

const countreducer=(state,action)=>{
switch (action.type){
    case "inc":
        return {
            count: state.count +1
        }
        case "dec":
            return{
                count:state.count >0 ? state.count -1 :0
            }
            default:
                return state;
}
}

function Usereducer() {
    const [state,dispatach]=useReducer(countreducer, {count:0})


    
  return (
    <div>
        <h1>{state.count}</h1>
      <button onClick={()=>dispatach({type:"inc"})}>INC</button>
            <button onClick={()=>dispatach({type:"dec"})}>DEC</button>


    </div>
  )
}

export default Usereducer
