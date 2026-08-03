import React, { useState } from 'react'

function useCustomer() {
    let [count, setCount]=useState(0)
    const inc =()=>{
        setCount(count+1)
    }
    const dec=()=>{
        setCount(count-1)
    }
    return{count,inc,dec}
  
}

export default useCustomer
