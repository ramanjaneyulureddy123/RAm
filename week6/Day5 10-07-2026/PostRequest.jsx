import React from 'react'

function PostRequest() {
    const sendData=()=>{
        const user={
            title:"hello",
            body:"this is my first post request",
            userId:1,
        }
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data)
            alert("data posted successfully")
        })
        .catch((error)=>{
            console.log("Error:",error)
        })
    }
  return (
    <div>
      <h2>Post request </h2>
      <button onClick={sendData}>post data</button>
    </div>
  )
}

export default PostRequest
