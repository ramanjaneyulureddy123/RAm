

const initialState={
    username:"",
    password:"",
    Login:false
}

function reducer (state,action){
    switch(action.type){
        case "setusername":
            return{
                ...state,
                username:action.payload
            }

            case "setpassword":
                return{
                    ...state,
                    password: action.payload
                }

                case "login":
                    return{
                        ...state,
                        Login:true
                    }
                    case "logout":
                    return{
                        // ...state,
                         username: "",
                          password: "",
                        Login:true
                    }

                    default :
                    return state
    }
}

import React, { useReducer } from 'react'

function Loginform() {
const [state, dispatch] = useReducer(reducer,initialState);

  return (
    <div>
      <h2>Login form</h2>

      <input 
      type="text"
      placeholder="username"
      value={state.username}
      onChange={(e)=>dispatch({type:"setusername",payload:e.target.value})}
      />
<br />
      <input
        type="password"
        placeholder="Password"
        value={state.password}
        onChange={(e) =>
          dispatch({
            type:"setpassword",
            payload:e.target.value
          })
        }
      />
<br />

<button onClick={() =>dispatch({type:"login" })}>Login</button>


<button onClick={() =>dispatch({type:"logout"})}>
        Logout
      </button>

      <h3>{
        state.Login ? "welcome" + state.username : "please login"
        
        }</h3>

    </div>
  )
}

export default Loginform
