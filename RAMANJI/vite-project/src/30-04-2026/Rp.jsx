import React from 'react'
import RC from './RC'

function Rp() {
    function getdata(data){
console.log(data)
    }
  return (
    <div>
      <RC send={getdata}/>
    </div>
  )
}

export default Rp
