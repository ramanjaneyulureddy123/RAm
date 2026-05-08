import React, { useEffect, useState } from 'react'

function UseEffect() {
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
    <div>
        <h1>{a[2]?.title}</h1>
        <h1>{a[2]?.id}</h1>
        <h1>{a[2]?.body}</h1>
                {a.map((b)=>{
                        return(
                            <div key={b.id}>
                                <h6>{b.title}</h6>
                                <h6>{b.id}</h6>
                            </div>
                             )
                              })}
        {/* <h1>{a}</h1> */}
      <button onClick={()=>{seta(a+1)}}>click</button>
    </div>
  )
}

export default UseEffect
