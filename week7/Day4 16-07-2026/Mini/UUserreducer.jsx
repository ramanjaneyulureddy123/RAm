
import React, { useReducer, useState } from 'react'


function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];

    case "DELETE":
      return state.filter(( _,index) => index !== action.payload);

    default:
      return state;
  }
}


function UUserreducer() {
    const [text, setText] = useState("");
  const [todos, dispatch] = useReducer(reducer,[]);
  return (
    <div>

      <h1 style={{ color: "red" }}>Hello useReducer</h1>
      <h2>Todo</h2>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
 <button onClick={() => { dispatch({ type: "ADD", payload: text });
          setText("");
        }}
      >
        Add
      </button>


      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => dispatch({ type: "DELETE", payload: index })}> X</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UUserreducer
