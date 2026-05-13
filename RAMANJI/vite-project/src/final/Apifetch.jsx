// import React, { useEffect, useState } from 'react'

// function Apifetch() {
//     let [data,setData]=useState([])
//     let [loading,setLoading]=useState(true)
//     let[error, setError]=useState(null)
      
//     useEffect(()=>{
//         const fetchData= async()=>{
//             try{
//                 const res= await fetch("https://jsonplaceholder.typicode.com/users")
//                 if(!res.ok){
//                     throw new Error("failed to fetch ")    
//                 }
//                 const result=await res.json()
//                 setData(result)
//             }
//             catch(err){
//                 setError(err.message)
//             } finally{
//                 setLoading(false)
//             }
//         }
//         fetchData()
//     },[])

//     if (loading){
//         return <p>...loading</p>
//     }
//     if (error){
//         return <p>error:{error}</p> 
//     }
//       return (
//     <div>
//       <h1>userList</h1>
//       <ul>
//         {data.map(user=>(
//             <li key={user.id}>
//                 {user.name}-{user.id}

//             </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default Apifetch










import React, { useReducer, useState } from "react";

// 🔹 Reducer
function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            text: action.payload,
            completed: false,
          },
        ],
      };

    case "DELETE_TODO":
      return {
        todos: state.todos.filter(
          (todo) => todo.id !== action.payload
        ),
      };

    case "TOGGLE_TODO":
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    default:
      return state;
  }
}

// 🔹 Component
function TodoApp() {
  const [state, dispatch] = useReducer(reducer, { todos: [] });
  const [input, setInput] = useState("");

  // Add Todo
  const handleAdd = () => {
    if (input.trim() === "") return; // prevent empty
    dispatch({ type: "ADD_TODO", payload: input });
    setInput("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Todo App</h1>

      {/* Input */}
      <input
        type="text"
        value={input}
        placeholder="Enter todo..."
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={handleAdd}>Add</button>

      {/* List */}
      <ul>
        {state.todos.map((todo) => (
          <li key={todo.id} style={{ margin: "10px 0" }}>
            
            {/* Toggle */}
            <span
              onClick={() =>
                dispatch({
                  type: "TOGGLE_TODO",
                  payload: todo.id,
                })
              }
              style={{
                cursor: "pointer",
                textDecoration: todo.completed
                  ? "line-through"
                  : "none",
              }}
            >
              {todo.text}
            </span>

            {/* Delete */}
            <button
              onClick={() =>
                dispatch({
                  type: "DELETE_TODO",
                  payload: todo.id,
                })
              }
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
