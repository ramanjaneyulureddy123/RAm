import React, { useState } from 'react'

function Renderingrolebase() {
    const [isAuth, setIsAuth]=useState(true)
    const role="user"
    if(!isAuth){
        return<h2>Please Login</h2>
    }
  return (
    <div>
      <h1>Welcome user</h1>
      {role === "admin" ? (<AdminDashboard /> ) :
      role === "user" ? (<UserDashboard/>) :
      <GuestDashboard/>
      }
    </div>
  )
}

function AdminDashboard() {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <p>You can manage users and settings.</p>
    </div>
  );
}

function UserDashboard() {
  return (
    <div>
      <h2>User Dashboard</h2>
      <p>You can view your profile and data</p>
    </div>
  );
}


function GuestDashboard() {
  return (
    <div>
      <h2>Guest Page</h2>
      <p>Limited access.</p>
    </div>
  );
}

export default Renderingrolebase


