import React, { useState } from 'react'
import Fragment from './Fragment';

function State() {
      const [count, setCount] = useState(0);
// parent to child 
const name = "Ramanjaneyulu Reddy";
  const age = 56;


  const skills = ["React", "JavaScript", "CSS"]

  const login=false;

  return (
    <div>
<Fragment name={name} age={age} />

<h3>skills</h3>
<ul>
  {skills.map((skill, index)=>(
    <li key={index}>{skill}</li>
  ))}
</ul>

{login ? (<h2>welcome user</h2>):(<h2>please login</h2>)}


      <h1>Count: {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>


    </div>
  )
}

export default State
