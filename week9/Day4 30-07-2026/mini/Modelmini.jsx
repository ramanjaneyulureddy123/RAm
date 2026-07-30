import React from 'react'
import { createPortal } from "react-dom"

function Modelmini({close}) {

    const handleClose=()=>{
        close()
    }

    return createPortal(
        <div>
            <h2>Modal popup</h2>
            <button onClick={handleClose}>Close</button>
        </div>,
        document.getElementById("portal-root")
    )
  
}

export default Modelmini
