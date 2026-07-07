import React from 'react'

function Anj(props) {

  return (
    <div>
      <h1>hello{props.college}</h1>
      <h1>Student details</h1>
      <p>Name:{props.name}</p>
      <p>Age: {props.age}</p>
      <p>Course: {props.course}</p>
      <p>Company:{props.company}</p>


    </div>


  )
}

export default Anj

// import React, { Component } from 'react'

// export default class Anj extends Component {
//   render() {
//     return (
//         <h1>hello world</h1>
//     )
//   }
// }

// import React from 'react'

// const Anj = ({name,age,course,company,college}) => {
//   return (
    
//  <> 
//          <h1>hello{college}</h1>     
//            <h1>Student details</h1>
//      <p>Name:{name}</p>
//       <p>Age: {age}</p>
//       <p>Course: {course}</p>
//            <p>Company:{company}</p> 
//     </> 
    
//   )
// }

// export default Anj


