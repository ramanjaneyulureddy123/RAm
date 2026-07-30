import React from 'react'

import "./App.css"

function Modal({close}) {
    return createPortal(
        <div className="overlay">
            <div className="modal">
            <h2>Login modal</h2>
            <p>this is a react portal modal</p>

            <button onClick={close}>Close</button>
            </div>
        </div>,
        document.getElementById("portal-root")
    )
  
}

export default Modal
