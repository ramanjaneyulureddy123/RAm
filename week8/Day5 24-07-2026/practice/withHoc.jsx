import React from 'react'

function withHoc(Component) {
  return function enhancedComponent(props){

  
  return (
    <div>
      <Component {...props}/>
    </div>
  )
}
}
export default withHoc
