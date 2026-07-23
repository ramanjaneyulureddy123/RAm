import React from 'react'

function withSpinner(Component) {
    return function enhance({loading, ...props}){
        if(loading){
            return <h2>Loading...</h2>
        }
        return <Component {...props}/>
    }
}

export default withSpinner
