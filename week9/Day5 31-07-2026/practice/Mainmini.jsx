import React, { Suspense } from 'react'
import useCounter from './useCounter'
import UserList from './UserList'
import ReactPortal from './ReactPortal'
import withLogger from './withLogger'
import Puremessage from './Puremessage'
// import About from "../Lazyloading/About"

const About=React.lazy(()=> import("../Lazyloading/About"))
function Mainmini() {

    const {count, increase}=useCounter()

    const users=["John", "komal", "sanjay"]

    function handleClick(){
        alert("button clicked")
    }
  return (
    <>
      <h2>{count}</h2>

      <button onClick={increase}>Increase</button>

      <button onClick={handleClick}>Click event</button>

      <UserList users={users}/>

      <ReactPortal />

<Puremessage/>
      <Suspense fallback={<h3>Loading...</h3>} >
<About/>
      </Suspense>
    </>
  )
}

export default withLogger(Mainmini)
