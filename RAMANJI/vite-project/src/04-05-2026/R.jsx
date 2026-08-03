
import { useDispatch, useSelector } from 'react-redux'
import { increment } from './reduxtool';



function R() {

    // const count=useSelector((state)=>state.counter.sum)
    //   const name = useSelector((state) => state.user.name);


const counts=useSelector((state)=>state.count)
const f= useDispatch()
console.log(counts)

    // let d=useDispatch()
 
    // console.log(count)
    // console.log(name)
  return (
    <div>
       {/* <h1>{count}</h1> */}

       <p>{counts}reduxtoolkit</p>


       <button onClick={()=>f(increment())}>inc</button>
{/* 
       <button onClick={()=>d({type:"increment",payload:2})}>increment</button>
       <button onClick={()=>d({type:"decrement",payload:2})}>decrement</button>
        <button onClick={() => d({ type: "setName", payload: "Mike" })}>
        Set Name
      </button> */}
    </div>
  )
}

export default R
