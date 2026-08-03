import React from 'react'

function UseDestruinfunctionparameters({colors}) {

    const [first, second, third]=colors;
  return (
    <div>
      <h3>{first}</h3>
         <h3>{second}</h3>
      <h3>{third}</h3>
    </div>
  )
}

function App(){
    const colors=["red", "green", "blue"]
    return <UseDestruinfunctionparameters  colors={colors}/>
}

export default App
