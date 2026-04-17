import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function X1() {

    let data=useSelector((state)=>{
        return state.sum
    })
    let f=useDispatch()
    console.log(data)
    

  return (
    <div>
      <h1> data:{data}</h1>
       <button onClick={()=>{f({type:"a",payload:10})}}>increment</button>
            <button onClick={()=>{f({type:"b",payload:5})}}>decrement</button>
    </div>
  )
}

export default X1
async function name() {
    return "hello"
}

name().then(result=>console.log(result))
// await 
function delay(){
  return new Promise(resolve=>{
    setTimeout(()=>{
      resolve("async")
    },2000)
  })
}

async function getdata(){
let result=await delay()
console.log(result)
}
getdata()

function test(){
  return new Promise(resolve=>{
    setTimeout(()=>{
resolve("datareceived")
    },1000)
  })
}

async function run(){
  const a=await test()
  console.log(a)
  const b=await test()
  console.log(b)
}
run()

async function start(){
  try{
  const res =await fetch("https://jsonplaceholder.typicode.com/posts")

  const data=await res.json()
    // console.log(data[0])
    // data.forEach(item=>{
    //     console.log(item.id)
    // })

    const item= data.find(post => post.id ===10)
    console.log(item)
  } catch(error){
    console.log("error occur:",error)
  }
}

start()

try{
  let a=x+10;
  console.log(a)
}
catch(error){
  console.log(error)
}
