import React from 'react'

function withAuth(Component) {
    return function enchance({logStatus, ...props}){

    if(!logStatus){
        return <h2>Please login first</h2>
    }
  return (
    <div>
      <Component {...props}/>
    </div>
  )
}
}

export default withAuth
