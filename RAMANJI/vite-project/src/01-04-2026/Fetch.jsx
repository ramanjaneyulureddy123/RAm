import React, { useEffect, useState } from 'react'

function Fetch() {
    const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
    //   setCount(prev => prev - 1); // increment every second
    }, 1000);

    // Cleanup
    return () => clearInterval(interval);
  }, []); 
//   ---------------------------------------------
    let[ msg, setMsg]=useState("waitind...")
    useEffect(()=>{
        const timer=setTimeout(() => {
            setMsg("hello after  3 sec")
        },3000);

        return ()=>clearTimeout(timer)
    },[])


// --------------------------------------------------------
    let [users, setUsers]=useState([])
    useEffect(()=>{
fetch("https://jsonplaceholder.typicode.com/posts")
.then(res=> res.json())
.then(data=>setUsers(data)) 
   },[])
  return (

    <div>
        <h1>{msg}</h1>
         <h1>Count: {count}</h1>
        <ul>
  {users.map(users=>( 
    <li key={users.id}>
        {users.title}- {users.id}
        </li>
    ))}
  </ul>
    </div>
  )
}

export default Fetch
