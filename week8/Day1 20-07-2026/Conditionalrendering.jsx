import React from 'react'

function Conditionalrendering() {
    // if 
    const login=false
// ternary 
    const isLoggedIn=true

//     if(login){
//         return<h1>Welcome if statement webpage</h1>
//     }else{
// return <h1>Please Login</h1>
//     }

    return(
        <div>
            {isLoggedIn ? <h1>Welcome ternary user</h1> : <h1>Please Login your details</h1>}
        </div>
    )
  
  
}

export default Conditionalrendering
