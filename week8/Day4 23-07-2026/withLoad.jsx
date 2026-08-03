import React from 'react'

function withLoad(Component) {
    return function loaded(props){
        const {loading}=props;

        if(loading){
            return <h2>Loading...</h2>
        }

    
 return <Component {...props}/>
//  wrapped (original) component passed to the HOC
//  and is rendered after the loading condition is false.
}
}

export default withLoad































// Problems (Without Props):
// The isLoading value is fixed.
// It cannot be changed based on API responses.
// Controlling the same HOC for different situations becomes difficult.
// Advantages (With Props):
// Provides dynamic control over the loading state.
// The same HOC can be reused with multiple components.
// Values can be passed from the parent component.
// Real-time API loading states can be handled easily.
