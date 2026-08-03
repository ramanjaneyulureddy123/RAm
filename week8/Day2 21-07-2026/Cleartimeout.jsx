// import React, { useEffect } from 'react'

// function Cleartimeout() {
//     useEffect(()=>{
//         const timer=setTimeout(()=>{
//             console.log("it is running...")
//         },2000)

//         return()=>{
//             clearTimeout(timer)
//             console.log("time stopped")
//         }
//     },[])
//   return (
//     <div>
//       <h1>Timer</h1>
//     </div>
//   )
// }

// export default Cleartimeout

import React, { useEffect } from 'react'

function Cleartimeout() {
    useEffect(()=>{
        const handleScroll=()=>{
            console.log("Scroll",window.scrollY)
        }
        window.addEventListener("scroll",handleScroll)
return()=>{
        window.removeEventListener("scroll",handleScroll)
}
    },[])
  return (
    <div style={{height:"2000px"}}>
      <h1>Scroll the page</h1>
    </div>
  )
}

export default Cleartimeout

