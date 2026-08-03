import React, { useContext } from 'react'
import { ThemeContext } from './Thememini';
import {useSelector, useDispatch} from "react-redux";
import { DEC, INC } from './CounterSlice';
import UUserreducer from './UUserreducer';

function All() {

    const { theme, toggleTheme } = useContext(ThemeContext)


  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch()
  return (
    <div  style={{
        background: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
        minHeight: "100vh",
        padding: "20px",
      }}>
      <h1>React Mini Project</h1>
      <hr />

       <h2>Context API</h2>

      <p>Current Theme: {theme}</p>

      
      <button onClick={toggleTheme}> Toggle Theme</button>
     <hr />

      <h2>Redux Toolkit Counter</h2>

      <h3>{count}</h3>
    
      <button onClick={() => dispatch(INC())}> +</button>

      <button onClick={() => dispatch(DEC())}>- </button>
    
     <hr />
    
    <UUserreducer />
    </div>
  )
}

export default All
