import React from 'react'

function E(p) {
    // console.log(p)
    let k=100
    console.log(p.Value)
    p.Value(k)


    
  return (
    <div>
        <button onClick={() => p.senddata("hello parent")}>
        Send Data to Parent
      </button>
      {/* <h1>e componenet:{p.Value}</h1> */}
    </div>
  )
}

export default E
