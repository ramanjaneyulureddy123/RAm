import React from 'react'
import { createPortal } from "react-dom"

import "./App.css"
function Popup({close}) {

    return createPortal(
        <div className="popup">
            <p>data saved successfully</p>
            <button onClick={close}>Close</button>
        </div>,
        document.getElementById("portal-root")
    )
  
}

export default Popup
