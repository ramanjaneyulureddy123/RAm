import React, { Component } from 'react'

export default class Passparameter extends Component {
  showMessage=(name, age)=>{
alert(`hello ${name}, your Age is
     ${age}`)
  }
  
  
    render() {
    return (
      <div>
       
       <button onClick={()=>alert("inline success ")}>inline event handling</button>
        <button onClick={()=>this.showMessage("Jagadeesh",45)}>Click me</button>
      </div>
    )
  }
}




// import React from "react";

// function App() {

//   const displayInfo = (name, age) => {
//     alert(`Name: ${name}, Age: ${age}`);
//   };

//   return (
//     <button onClick={() => displayInfo("Rahul", 25)}>
//       Show Info
//     </button>
//   );
// }

// export default App;