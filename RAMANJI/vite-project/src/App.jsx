import React, { useState } from 'react'
import withAuth from '../../../week8/Day4 23-07-2026/withAuth'
import Dashboard from '../../../week8/Day4 23-07-2026/Dashboard'
import withLoad from '../../../week8/Day4 23-07-2026/withLoad'
import User from '../../../week8/Day4 23-07-2026/User'
import withAuthorization from '../../../week8/Day4 23-07-2026/withAuthorization'
import Admin from '../../../week8/Day4 23-07-2026/Admin'
import withSpinner from '../../../week8/Day4 23-07-2026/withSpinner'
import Usespinner from '../../../week8/Day4 23-07-2026/Usespinner'





function App() {
  // const [show,setshow]=useState(true)
  // const ProtectDashboard=withAuth(Dashboard)

  // const UserLoaded=withLoad(User)

  // const Authorization=withAuthorization(Admin,"admin")


  // mini 
  const Userspinner = withSpinner(Usespinner)

  const [loading, setLoading] = useState(true);

  return (
    <div>

{/* <ProtectDashboard/> */}
{/* <UserLoaded loading={true}/> */}

{/* <Authorization/> */}

<Userspinner loading={loading} name="john"/>
 <button onClick={() => setLoading(!loading)}>
        Toggle Loading
      </button>
  
{/* {show && <Cleartimeout/>} */}
{/* <button onClick={()=>setshow(false)}>Remove component</button> */}




  </div>
  )
}

export default App
