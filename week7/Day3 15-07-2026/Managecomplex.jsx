

const initialState={
    name:"",
    email:"",
    age:0
}

function reducer(state, action){
    switch(action.type){
        case "setname":
            return {
                ...state,
                name:action.payload
            }

            case "setemail":
                return{
                    ...state,
                    email:action.payload
                }
             case "setage":
                return{
                    ...state,
                    age:action.payload
                }
                
                case "reset":
                    return initialState;

                    default :
                    return state
    }
}

import React, { useReducer } from 'react'

function Managecomplex() {

    const [state, dispatch]=useReducer(reducer,initialState)
  return (
    <div>
      <h2>Name:{state.name}</h2>
      <h2>Email:{state.email}</h2>
      <h2>Age:{state.age}</h2>

      <button onClick={()=>dispatch({type:"setname",payload:"anji"})}>SetName</button>
        <button onClick={()=>dispatch({type:"setemail",payload:"anji3456@gmail.com"})}>SetEmail</button>
      <button onClick={()=>dispatch({type:"setage",payload:25})}>Setage</button>
      <button onClick={()=>dispatch({type:"reset"})}>Reset</button>


  
    </div>
  )
}

export default Managecomplex
