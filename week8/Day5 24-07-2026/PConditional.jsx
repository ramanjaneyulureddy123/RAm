import React from 'react'

function PConditional() {
    // if 
    const login=true

    const isLoggedIn = false;

    const isAdmin = true;

    // if(login){
    //     return <h2>welcome webpage it is if statement webpage</h2>
    // }else{
    //     return <h2>please login</h2>
    // }
    return(
        <div>
            
            {isLoggedIn? <h2>Dashboard</h2>:<h2>Login page</h2>}
       
        {isAdmin && <h2>Admin Panel</h2>}
        </div>
    )
 
}

export default PConditional


























// Best Practices
// Use if-else for complex conditions.
// Use ternary for two outcomes.
// Use && for showing a single component.

// Use Cases
// Login authentication
// Loading spinner
// Error messages
// User roles