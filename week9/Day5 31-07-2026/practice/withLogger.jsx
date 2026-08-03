import React from 'react'

const withLogger = (Component) => {
    return function newComponent(props){
        console.log("component rendering")
    
  return <Component {...props}/>
}
}
export default withLogger
