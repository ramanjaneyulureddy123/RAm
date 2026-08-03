import React, { useEffect, useState } from 'react'
import { addPost, deletePost, getPosts, patchPost, updatePost } from './File1';

function File2() {

     const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("")


  useEffect(()=>{
    loadPosts()
  },[])
  async function loadPosts(){
    try{
        const data=await getPosts()
        setPosts(data.slice(0,5))
    }catch(error){
        setError("failed to load data")
    }finally {
        setLoading(false)
    }
  }

//   post 
async function handleAdd(){
    const newPost=await addPost()
    setPosts([...posts,newPost])
}

// put 
async function handleUpdate(id){
    const updated =await updatePost(id)

    setPosts(
        posts.map((post)=>
        post.id === id ? updated :post)
    )
}

 // PATCH
  async function handlePatch(id) {
    const updated = await patchPost(id);

    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, title: updated.title } : post
      )
    )
  }

   // DELETE
  async function handleDelete(id) {
    await deletePost(id);
    setPosts(posts.filter((post) => post.id !== id));
  }

  if (loading) return <h2>Loading...</h2>

  if (error) return <h2>{error}</h2>
  return (
    <div>
      <h1>react mini ass</h1>

      <button onClick={handleAdd}> Add post</button>
      <hr/>

      {posts.map((post)=>(
        <div key={post.id}>
 <h3>{post.title}</h3>

 <button onClick={() => handleUpdate(post.id)}>PUT</button>

          <button onClick={() => handlePatch(post.id)}>PATCH</button>

          <button onClick={() => handleDelete(post.id)}>DELETE</button>

          <hr />
            </div>
      ))}
    </div>
  )
}

export default File2
