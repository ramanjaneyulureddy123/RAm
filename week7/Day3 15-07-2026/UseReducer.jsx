function reducer (state,action){
    switch(action.type){
        case "increment":
            return {count: state.count + 1}

            case "decrement":
                return {count:state.count -1}

                case "addvalue":
                  return {
                    count: state.count + action.payload
                  }

                case "reset":
                    return {count:0}

                    default:
                        return state;
    }

}

import React, { useReducer } from 'react'

function UseReducer() {

    const [state,dispatch]=useReducer(reducer,{count:0})

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={()=>dispatch({type:"increment"})}>+</button>
      <button onClick={()=>dispatch({type:"decrement"})}>-</button>
      <button onClick={()=>dispatch({type:"addvalue",payload:10})}>Add10</button>
      <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
    </div>
  )
}

export default UseReducer
