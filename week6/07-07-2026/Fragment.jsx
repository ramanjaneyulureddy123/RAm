import React from 'react'

function Fragment(props) {

    const name="ramu";

    function msg(){
        return "welcome function call"
    }

    const student={
        name:"kumar",
        age:20
    }

  return (
    <React.Fragment> 

        <h2>child compnents</h2>

          <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>

        <p> variables say hello {name}</p>
<p>mathematical expressions total:{10+20}</p>

      <h1>hello</h1>
            <h1>hello world</h1>

            <h1>{msg()}</h1>

            <h6>Name:{student.name}</h6>
            <h6>Name:{student.age}</h6>

 </ React.Fragment>
  )
}

export default Fragment
