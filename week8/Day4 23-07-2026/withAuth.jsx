import React from 'react'

function withAuth(Component) {
    return function enhanced (){
        const login= false
    
        if(!login){
            return <h2>Please Login</h2>
        }
    
    
  return (
    <div>
      <Component/>
    </div>
  )
}
}

export default withAuth
