import axios from 'axios'

const URL="https://jsonplaceholder.typicode.com/posts"

// get using fetch 
export async function getPosts(){
    const response=await fetch(URL);

    if (!response.ok){
        throw new Error("fetched error")
    }
    return response.json()
}

// post using axios 
export async function addPost(){
    const response=await axios.post(URL,{
        title:"new post",
        body:"this is a new post"
    })
    return response.data
}

// put 


export async function updatePost(id){
    const response=await axios.put(`${URL}/${id}`,{
        title:"updated post",
        body:"updated body"
    })
    return response.data
}

// patch 
export async function patchPost(id) {
  const response = await axios.patch(`${URL}/${id}`, {
    title: "Patched Title",
  })
  return response.data
}

// DELETE using Axios
export async function deletePost(id) {
  await axios.delete(`${URL}/${id}`);
}
