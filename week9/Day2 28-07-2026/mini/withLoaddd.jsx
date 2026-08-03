import React from 'react'

function withLoaddd(Component) {
    return function enchance({loading, ...props}){
if (loading){
    return <h2>Loading data ...</h2>
}

return <Component {...props}/>
    }
  
}

export default withLoaddd









// mini 
// const Mini=withLoaddd(UserList)

// const {data, loading}=UseCustom("https://jsonplaceholder.typicode.com/users")
  
//   return (
//     <div>
//       <h1>react application mini</h1>
//       <Mini  users={data}
//       loading={loading}/>