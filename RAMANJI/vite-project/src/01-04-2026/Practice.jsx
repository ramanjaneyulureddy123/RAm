
import React, { useEffect, useState } from 'react'
import './effect.css'

function Practice() {
     let [a,seta]=useState([])
        useEffect(()=>{
    console.log(a)
        },[a])
        // let[a,seta]=useState(0)
        useEffect(()=>{
            console.log("welcome to real life nature")
            fetch("https://jsonplaceholder.typicode.com/posts")
            .then((d)=> d.json())
            .then((d)=>
            // console.log(d[0].name)
            seta(d)
            // console.log(typeof(d))
            // console.log(Array.isArray(d))
        )
        },[])
        console.log(a[1])
            
  return (

  <div className="container">

    <h1 className="title">{a[2]?.title}</h1>
    <h1 className="id">{a[2]?.id}</h1>
    <h1>{a[2]?.body}</h1>

    {a.map((b) => {
      return (
        <div className="card" key={b.id}>
          <h3 className="title">{b.title}</h3>
          <h6 className="id">{b.id}</h6>
        </div>
      )
    })}

  </div>
)
}

export default Practice
