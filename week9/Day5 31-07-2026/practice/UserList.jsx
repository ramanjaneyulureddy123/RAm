import React, { memo, useCallback, useMemo } from 'react'

function UserList({users}) {

    const totalUsers=useMemo(()=>{
        return users.length;
    },[users])

    const showUser=useCallback((name)=>{
        alert(name)
    },[])
  return (
    <div>
      <h3>total Users:{totalUsers}</h3>

      {users.map((user,index)=>(
    <p key={index}
       onClick={()=>showUser(user)}>{user}
    </p>
   ) )}
    </div>
  )
}

export default memo(UserList)
