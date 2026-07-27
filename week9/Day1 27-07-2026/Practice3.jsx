import React, { useEffect, useState } from 'react'

function Practice3() {
    const [posts,setPosts]=useState([])
    const [loading, setLoading]=useState(true)
    const [error, setError]=useState(null)

    useEffect(()=>[
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
            if(!response.ok){
                throw new Error("failed to fetch data")
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
    ],[])

    if (loading){
        return <h2>Loading Posts...</h2>
    }

    if(error){
        return<h2>{error}</h2>
    }
  return (
    <div>
      {posts.map((post)=>(
        <ul>
            <li key={post.id}>
                <p>{post.title}</p>
                <p>{post.body}</p> 

            </li>
        </ul>
      ))}
    </div>
  )
}

export default Practice3
