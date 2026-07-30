// import React from 'react'

// function EventbindingF() {
//     const handleClick=()=>{
//         console.log("button clicked")
//     }
//   return (
//     <div>
//       <button onClick={handleClick}>Click me</button>
//     </div>
//   )
// }

// export default EventbindingF

import React from 'react'

function EventbindingF() {

    const handleSubmit=(e)=>{
        e.preventDefault() 
        // with this page reload automatic
        alert ("login success")
    }
  return (
    <div>
      <form onSubmit={handleSubmit}> 
        <input type="email" placeholder="email"/>
        <input type="password" placeholder="Password" />
        <button type="submit"> Login</button>

      </form>
    </div>
  )
}

export default EventbindingF

