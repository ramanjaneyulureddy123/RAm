import React, { useState } from 'react'

function State() {
          const [count, setcount]=useState(0)

          const [text, setText]=useState("Hai")

          function msg(){
            setText("Welcome the react application")
          }


          const [likes, setLikes]=useState(0)
  return (
    <div>
<h2>{count}</h2>

<button onClick={()=>{setcount(count+1)}}>Increase</button>
<button onClick={()=>{setcount(count-1)}}>Decrease</button>


<h6>{text}</h6>
<button onClick={msg}> Change text</button>


<Posts  title="My first post is famous" likes={likes}/>
<button onClick={()=>{setLikes(likes+1)}}>Insta Likes</button>

    </div>
  )
}

function Posts(props){
    return(
        <div>
            <h2> {props.title}</h2>
            <p>Likes:{props.likes}</p>
        </div>
    )
}

export default State
