import React, { useEffect, useState } from 'react'

function usewindowsize() {

    const [size, setSize]=useState({
        width:window.innerWidth,
        height:window.innerHeight 
    })

    useEffect(()=>{
        const handleResize=()=>{
            setSize({
                width:window.innerWidth,
                height: window.innerHeight
            })
        }

    window.addEventListener("resize", handleResize)

     return () => {
      window.removeEventListener("resize", handleResize);
    };
    },[])
    return size;

}

export default usewindowsize
