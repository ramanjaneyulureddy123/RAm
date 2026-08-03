import React from 'react'

function withLoad(Component) {
    return function enhance({loading, ...props}){

    if (loading){
        return <h2>Loading...</h2>
    }
  return (
    <div>
      <Component {...props}/>
    </div>
  )
}
}
export default withLoad
