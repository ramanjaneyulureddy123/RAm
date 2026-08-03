import React from 'react'

function withHoc(Component) {
    return function Enhance(props){
  return (
    <div>
      <h3>this is from HOC</h3>
      <Component {...props}/>
    </div>
  )
}
}
export default withHoc
