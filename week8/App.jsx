import React, { useState } from 'react'
import Dashboard from '../../../week8/Day4 23-07-2026/Dashboard'
import Fragment from '../../../week9/Day2 28-07-2026/Fragment'
import withHoc from '../../../week9/Day2 28-07-2026/withHoc'
import UseHoc from '../../../week9/Day2 28-07-2026/UseHoc'
import UseAuth from '../../../week9/Day2 28-07-2026/UseAuth'
import withAuth from "../../../week9/Day2 28-07-2026/withAuth"
import withLoad from '../../../week9/Day2 28-07-2026/withLoad'
import Useload from '../../../week9/Day2 28-07-2026/Useload'
import Counter from '../../../week9/Day2 28-07-2026/Counter'
import UseCounter from '../../../week9/Day2 28-07-2026/UseCounter'
import UsersF from '../../../week9/Day2 28-07-2026/UsersF'
import LoginForm from '../../../week9/Day2 28-07-2026/implement/loginForm'
import Theme from '../../../week9/Day2 28-07-2026/implement/Theme'
import Window from '../../../week9/Day2 28-07-2026/implement/Window'
import AnotherCounter from '../../../week9/Day2 28-07-2026/AnotherCounter'
import withLoaddd from '../../../week9/Day2 28-07-2026/mini/withLoaddd'
import UserList from '../../../week9/Day2 28-07-2026/mini/UserList'
import UseCustom from '../../../week9/Day2 28-07-2026/mini/UseCustom'





function App() {
  // const [show,setshow]=useState(true)
  // const ProtectDashboard=withAuth(Dashboard)

  // const UserLoaded=withLoad(User)

  // const Authorization=withAuthorization(Admin,"admin")


  // mini 
  // const Userspinner = withSpinner(Usespinner)

  // const [loading, setLoading] = useState(true);

  // const HighOrder=withHoc(UseHoc)

  // const Hocauth=withAuth(UseAuth)

  // const USEload=withLoad(Useload)

  // const user=[
  //   {id:1, name:"naga"},
  //   {id:2, name:"prashanth"}
  // ]

// mini 
const Mini=withLoaddd(UserList)

const {data, loading}=UseCustom("https://jsonplaceholder.typicode.com/users")
  
  return (
    <div>
      <h1>react application mini</h1>
      <Mini  users={data}
      loading={loading}/>

    
{/* <HighOrder  name="Ram"/> */}

{/* <Hocauth logStatus={true} name="anji"/> */}

{/* <USEload loading={true}  users={user}/> */}

{/* <UseCounter/> */}
{/* <Counter/> */}
{/* <UsersF/> */}
{/* <LoginForm/> */}
{/* <Theme/> */}
{/* <Window/> */}
{/* <AnotherCounter/> */}

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
