import React, { lazy, Suspense } from 'react'


const About=lazy(()=> import("./About"))
function LazyL() {
  return (
    <div>
      <Suspense fallback={<h2>Loading...</h2>}>
        <About />
      </Suspense>
    </div>
  )
}

export default LazyL


// import React, { useState } from 'react'

// function LazyL() {
//     const [show, setShow]=useState(false)

//     const handleClick=()=>{
//         setShow(!show)
//     }
//   return (
//     <div>
//       <button onClick={handleClick}>
//         {show ?"hide":"show"}
//       </button>

//       {show && (<p>this is content of the webpage</p>)}
//     </div>
//   )
// }

// export default LazyL
