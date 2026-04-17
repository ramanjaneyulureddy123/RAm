import React from 'react'
import D from './D'
import E from './E'

function C() {
    const name="surya"
    const age=22
    let a=10
    function receivedata(data){
        console.log("child nundi vachanu",data)
    }
    // invalid function object
    function hai(k){
        console.log(k)
    }
    hai(2)

    function sayhi(){
        return "hi man"
    }

    const user={name:"mike",age:22}
    let person='jassu'
    const ages=22
        const arr=["a","b","c"]
  return (
    <div>
        {arr.map(item=><p>{item}</p>)}
        <h1>{person}</h1>
        <h1>{ages}</h1>
        <h1>{user.name}</h1>
        <h1>{sayhi()}</h1>
    
{/* <E senddata={receivedata}/> */}
<E senddata={receivedata} Value={hai} />

<h1>this is c componenet {a}</h1>

{/* < E Value={hai}/> */}
<D Value={a}/>


      <p>{name}</p>
         <p>{age}</p>
<h1>{a && <p>yes it is true</p>}</h1>
</div>
  )
}

export default C
