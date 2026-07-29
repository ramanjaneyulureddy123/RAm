import React, { useCallback, useMemo, useState } from 'react'
import ReactM from './ReactM'
import PureUser from './PureUser'

function Main() {
     const [count, setCount] = useState(0)
  const [search, setSearch] = useState("")

    const users = [
    "Ravi",
    "Raj",
    "Prem",
    "Santhosh",
    "John"
  ]

  const filterUsers=useMemo(()=>{
    console.log("filtered users...")

    return users.filter((user)=>
    user.toLowerCase().includes(search.toLowerCase())
    )
  },[search])

  const handleClick=useCallback(()=>{
    console.log("child button clicked")
  },[])
  return (
    <div>
      <h1>Mini application</h1>
      <button onClick={() => setCount(count + 1)}>Count:{count}</button>
    

     <br/><br/>

      <input
        placeholder="Search user"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
      />

      <h3>Usememo</h3>
      {
        filterUsers.map((user)=>(
          <p key={user}>{user}</p>
        ))
      }
      <hr/>
 <h3>React.memo Example</h3>

<ReactM  name="ravi"/>

      <h3>useCallback Example</h3>
      <PureUser click={handleClick} />

      </div>
  )
}

export default Main
