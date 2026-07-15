const initialState={
    name:"",
    email:"",
    password:""
}

function formReducer(state,action){
    switch(action.type){
        case "Update_Field":
            return {
                ...state,
                [action.field]:action.value
            }

            case "Reset":
                return initialState;

                default:
                    return state;
    }
}

import React, { useReducer } from 'react'

function Formhandling() {

    const [formData, dispatch]=useReducer(formReducer, initialState)

const handleChange=(e)=>{
    dispatch({
        type:"Update_Field",
        field:e.target.name,
        value: e.target.value
    })
}

const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(formData)
    dispatch({type:"Reset"})
}
    return (
    <div>
      <form onSubmit={handleSubmit}>
<input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />

       <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />


      <button type="submit">Submit</button>

      <button onClick={()=>dispatch({type:"Reset"})}>Reset</button>
      </form>

    </div>
  )
}

export default Formhandling
