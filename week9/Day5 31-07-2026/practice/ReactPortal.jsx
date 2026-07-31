import React from 'react'
import {createPortal} from "react-dom"

function ReactPortal() {
    return createPortal(
<div style={{
    background:"lightblue",
    padding:"20px"
}}>Portal modal

</div>,
document.getElementById("portal-root")
    )
  
}

export default ReactPortal
