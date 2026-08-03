import React, { useState } from 'react'
import Child from "../miniass/Child"
import Display from './Display';

function Mini() {
    const [message, setMessage] = useState("Hello Students")
    const [childMessage, setChildMessage] = useState("");

      // Dynamic data
  const students = ["Ravi", "Priya", "John", "Sara"];

  return (
    <div>
      <h1>React Mini Assignment</h1>
 {/* Parent to Child Communication using Props */}
      <Child  message={message}
      sendData={setChildMessage}/>

      {/* <hr/> */}
        {/* Child to Child Communication through Parent */}
      <Display text={childMessage} />

      <hr/>

       <h3>Dynamic Rendering</h3>
      {students.map((student, index) => (
        <Display key={index} text={student} />
      ))}
    </div>
  )
}

export default Mini
