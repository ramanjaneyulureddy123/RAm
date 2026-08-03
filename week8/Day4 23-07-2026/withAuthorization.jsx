import React from 'react'

function withAuthorization(Component, allowedRole) {
    return function AuthComponent(props){
        const userRole="admin"

        if(userRole !== allowedRole){
            return <h2>Access denied</h2>
        }
        return <Component  {...props}/>
    }

 
}

export default withAuthorization
