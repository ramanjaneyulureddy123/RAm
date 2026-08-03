// import React, { useState } from 'react'

// function UseCall() {
//     const [count, setCount] = useState(0)

//   const handleClick = () => {
//     console.log("clicked")
//   }
//   return (
//     <div>
//        <h1>{count}</h1>

//       <button onClick={() => setCount(count + 1)}>
//         Increment
//       </button>

//       <Child onClick={handleClick} />
//     </div>
//   )
// }

// function Child({ onClick }) {

//   console.log("Child Render")

//   return (
//     <button onClick={onClick}>Child Button</button>
//   )
// }

// export default UseCall


// import React, { useCallback, useState } from 'react'

// function UseCall() {

//     let [count, setCount]=useState(0)

//     const handleClick=useCallback(()=>{
//         console.log("hclicked")
//     },[])
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={()=>setCount(count+1)}> inc</button>
//       <Child  onClick={handleClick}/>
//     </div>
//   )
// }

// const Child=React.memo(({onClick})=>{
//     console.log(" child rendering")
//     return(
//         <button onClick={onClick}>click</button>
//     )
// })

// export default UseCall

import React, { useCallback, useState } from 'react'

function Usecall() {

  const [count, setCount] = useState(0)
  const [text, setText] = useState("hello")

  const increment = useCallback(() => {
    setCount((prev) => prev + 1)
  }, [])

  return (
    <div>

      <h1>Count : {count}</h1>

      <h1>Text : {text}</h1>

      <button onClick={() => setText("react")}>
        Change Text
      </button>

      <Child onClick={increment} />

    </div>
  )
}

const Child = React.memo(({ onClick }) => {

  console.log("child render")

  return (
    <button onClick={onClick}>
      Increment
    </button>
  )
})

export default Usecall
