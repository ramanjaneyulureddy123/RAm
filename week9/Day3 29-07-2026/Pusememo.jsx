// import React, { useMemo, useState } from 'react'

// function Pusememo() {
//     const [count, setCount]=useState(0)

//     const result=useMemo(()=>{
//         console.log("Calculating...")
//         return 10 * 10;
//     },[])
//   return (
//     <div>
//       <h1>result:{result}</h1>
//       <button onClick={()=>setCount(count+1)}>Count:{count}</button>
//     </div>
//   )
// }

// export default Pusememo


// [] without this every time render
// [] with this one time only render 
// use memo is used to aviod th recalculates

import React, { useMemo, useState } from 'react'

function Pusememo() {
     const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");

   const users = ["John", "raju", "Prem", "Santhosh"]

const FilteredUsers=useMemo(()=>{
    console.log("filtering users...")


return users.filter((user)=>
user.toLowerCase().includes(search.toLowerCase())
)
},[search])
  return (
    <div>
      <input 
       value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search user"
      
      />

        <h3>Users:</h3>

        {FilteredUsers.map((user)=>(
            <p key={user}>{user}</p>
        ))}

        <button onClick={()=>setCount(count+1)}>Count:{count}</button>
    </div>
  )
}

export default Pusememo

