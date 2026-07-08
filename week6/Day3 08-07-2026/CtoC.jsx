import React, { useState } from 'react'

function CtoC() {
    const [data, setData]=useState("");

  return (
    <div>
      <C2 sendData= {setData}/>
      <C1 data={data} />

    </div>
  )
}

function C1({data}){
    return(
        <div>
            <h1>{data}</h1>
        </div>
    )
}

function C2({sendData}){

    const a=1000
    return(
        <div>
<button onClick={()=>sendData(a)}>send 1000</button>
        </div>
    )
}

export default CtoC
