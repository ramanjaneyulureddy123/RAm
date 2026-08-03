import React, { useEffect, useState } from 'react'
import "./Posts.css"
function Handlestateuseeffect() {
    const[posts, setPosts]=useState([])
    const[loading, setLoading]=useState(true)
    const [error, setError]=useState("")
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
            if(!response.ok){
                throw new Error("failed to fetch posts")
            }
            return response.json()
        })
        .then((data)=>{
            setPosts(data)
            setLoading(false)
        })
        .catch((error)=>{
            setError(error.message)
            setLoading(false)
        })

    },[])
    if(loading) return <h2>Loading...</h2>
    if (error) return <h2> {error}</h2>
  return (
    <div className="container">
        {posts.map((post)=>(
            <div className="card" key={post.id}>
<h3>{post.title}</h3>
<p>{post.body}</p>
            </div>
        ))}
      
    </div>
  )
}

export default Handlestateuseeffect




















// import React, { useEffect, useState } from 'react'

// function Handlestateuseeffect() {
//     const[users, setUsers]=useState([])
//     const[loading, setLoading]=useState(true)
//     const [error, setError]=useState("")
//     useEffect(()=>{
//         fetch("https://jsonplaceholder.typicode.com/users")
//         .then((response)=>{
//             if(!response.ok){
//                 throw new Error("failed to fetch data")
//             }
//             return response.json()
//         })
//         .then((data)=>{
//             setUsers(data)
//             setLoading(false)
//         })
//         .catch((error)=>{
//             setError(error.message)
//             setLoading(false)
//         })

//     },[])
//     if(loading) return <h2>Loading...</h2>
//     if (error) return <h2> {error}</h2>
//   return (
//     <div>
//       {users.map((user)=>(
//         <p key={user.id}>{user.name}</p>
//       ))}
//     </div>
//   )
// }

// export default Handlestateuseeffect
