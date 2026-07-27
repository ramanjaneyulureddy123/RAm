import React, { useState } from 'react'
import withAuth from '../../../week8/Day4 23-07-2026/withAuth'
import Dashboard from '../../../week8/Day4 23-07-2026/Dashboard'
import withLoad from '../../../week8/Day4 23-07-2026/withLoad'
import User from '../../../week8/Day4 23-07-2026/User'
import withAuthorization from '../../../week8/Day4 23-07-2026/withAuthorization'
import Admin from '../../../week8/Day4 23-07-2026/Admin'
import withSpinner from '../../../week8/Day4 23-07-2026/withSpinner'
import Usespinner from '../../../week8/Day4 23-07-2026/Usespinner'
import PConditional from '../../../week8/Day5 24-07-2026/PConditional'
import Puseeffect from '../../../week8/Day5 24-07-2026/Puseeffect'
import Pdynamic from '../../../week8/Day5 24-07-2026/Pdynamic'
import Museeffect from '../../../week8/Day5 24-07-2026/practice/Museeffect'
import Withreactmemo from '../../../week9/Day1 27-07-2026/Withreactmemo'
import Shallowcomparision from '../../../week9/Day1 27-07-2026/Shallowcomparision'
import Practice3 from '../../../week9/Day1 27-07-2026/Practice3'
import Reausableusercard from '../../../week9/Day1 27-07-2026/Reausableusercard'
import Reuseable from '../../../week9/Day1 27-07-2026/Reuseable'
import Getfetchaxios from '../../../week9/Day1 27-07-2026/api calls/Getfetchaxios'
import Post from '../../../week9/Day1 27-07-2026/api calls/Post'
import Put from '../../../week9/Day1 27-07-2026/api calls/Put'
import PatchFetch from '../../../week9/Day1 27-07-2026/api calls/PatchFetch'





function App() {
  // const [show,setshow]=useState(true)
  // const ProtectDashboard=withAuth(Dashboard)

  // const UserLoaded=withLoad(User)

  // const Authorization=withAuthorization(Admin,"admin")


  // mini 
  // const Userspinner = withSpinner(Usespinner)

  // const [loading, setLoading] = useState(true);

  return (
    <div>

{/* <Withreactmemo/> */}
{/* <Shallowcomparision/> */}
{/* <Practice3/> */}
{/* <Reuseable /> */}
{/* <Getfetchaxios/> */}
{/* <Post/> */}
{/* <Put/> */}
<PatchFetch/>




      {/* <PConditional/> */}
      {/* <Puseeffect/> */}
      {/* <Pdynamic/> */}
      {/* <Museeffect/> */}

{/* <ProtectDashboard/> */}
{/* <UserLoaded loading={true}/> */}

{/* <Authorization/> */}
{/* 
<Userspinner loading={loading} name="john"/>
 <button onClick={() => setLoading(!loading)}>
        Toggle Loading
      </button> */}
  
{/* {show && <Cleartimeout/>} */}
{/* <button onClick={()=>setshow(false)}>Remove component</button> */}




  </div>
  )
}

export default App
