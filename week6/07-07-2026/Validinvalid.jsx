import React, { StrictMode } from 'react'

function Validinvalid() {

    // object 
      const student = {
    name: "Ravi",
    age: 20,
  };
// function 
function greet() {
    return "Hello";
  }
//   symbol 
const sym = Symbol("id")

// bigint 
const num = 123n;

// valid things 
 const fruits = ["Apple", "Mango", "Orange"];

  return (
    <React.StrictMode>
       {/* <h1>{student}</h1> */}
       {/* <h1>{greet}</h1> */}
       {/* <h1>{sym}</h1> */}
        {/* <h1>{num}</h1> */}

{/* valid  */}
<h1>{"Hello React"}</h1>
<h1>{100}</h1>
<h1>{true}</h1>

<h1>{fruits}</h1>



    </React.StrictMode>
  )
}

export default Validinvalid
