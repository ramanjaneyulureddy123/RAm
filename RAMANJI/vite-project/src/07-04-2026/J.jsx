import React from 'react'
import K from './K'

const J=React.memo(()=> {
    console.log("j componenet")
  return (
    <div>
      {/* <p>hi</p> */}
      <K/>
    </div>
  )
})

export default J
