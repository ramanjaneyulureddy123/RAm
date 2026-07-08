import React from 'react'

function PtoC() {
          const name="Ravi Sankar";
           const age = 22;           
  const skills = ["React", "JS", "CSS"]; 
  const user = {                       
    city: "Hyderabad",
    role: "Developer"
  }

  return (
    <div>
        <h1>sending different types of data</h1>
<Child name={name}
age={age} skills={skills} user={user} />

 <Child
        name="veer Reddy"
        age={28}
        skills={["HTML", "Java"]}
        user={{ city: "Vijayawada", role: "Designer" }}
      />
    </div>
  )
}

function Child(props){
    return (
        <div>
<h2>This is receiving child copmonent</h2>
<p>Name:{props.name}</p>
<p>Age:{props.age}</p>
<p>Skills:</p>
<ul>
    {props.skills.map((skill, index)=>(
        <li key={index}>{skill}</li>
    ))}
</ul>

<p>City: {props.user.city}</p>
<p>City: {props.user.role}</p><hr/>

        </div>
    )
}

export default PtoC
