import React from 'react'

function CC1(props) {
  return (
    <div>
      <h2>this is child copmonent 1</h2>
      {/* <p>age={20}</p> */}

      <p>my age :{props.age} </p>
    </div>
  )
}

export default CC1
