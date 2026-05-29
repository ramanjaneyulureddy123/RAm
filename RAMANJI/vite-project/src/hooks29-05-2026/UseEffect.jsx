import React, { useEffect, useState } from 'react'

function UseEffect() {

    const[users, setUsers]=useState([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])
    const[count,setCount]=useState(0);

    useEffect(()=>{
        console.log( "count changes:",count)
    },[count])

    const [time ,setTime]=useState(new Date())

    useEffect(()=>{
        let timer=setInterval(()=>{
            setTime(new Date())
        },1000)
        return ()=>{
            clearInterval(timer)
        }
    },[])

    // useEffect(()=>{
    //     let timer=setInterval(()=>{
    //         console.log("...running")
    //     },1000)

    //     return ()=>{
    //         clearInterval(timer)
    //         console.log("timer stopped")
    //     }
    // })

// useEffect(() => {
//     console.log("useEffect running");
//   });


    // useEffect(()=>{
    //     console.log("it is useeffect")
    // },[])
  return (
    <div>

        <h1>{time.toLocaleTimeString()}</h1>

        <h2>{time.toLocaleDateString()}</h2>

        <ul>
            {users.map((user)=>(

                <li key={user.id}>

                    {user.name}-{user.id}
                </li>
            ))}
        </ul>
      <h1>hello useEffect</h1>

 <h1>clean up function</h1>

<button onClick={()=>setCount(count+1)}> click</button>

<h2>{count}</h2>
    </div>
  )
}

export default UseEffect
