import React from 'react'

function Minip() {

   
    const name="anji";
    const age=19;
    const role="engineer";
    const city="chennai";

    

  return (
    <div>
         <h1>welcome to react application</h1>
         <h2>Personal information</h2>
        <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Role: {role}</p>
      <p>City: {city}</p>


      <h2>Skills</h2>
      <ul>
        <li>HTML</li>
        <li>JS</li>
        <li>CSS</li>
        <li>React</li>
      </ul>

      <p>This is all about my information</p>


    </div>
  )
}

export default Minip
