import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Dashboard() {
    return (
        <div>
           <h1>Dashboard</h1>
           <Link to="./Profile">Profile</Link>
           <Link to="./Settings">settings</Link>
<Outlet/>
        </div>
    )
}

export default Dashboard
