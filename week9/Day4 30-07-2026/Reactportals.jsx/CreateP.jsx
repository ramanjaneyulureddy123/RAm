import React from 'react'
import ReactDOM from "react-dom"

function CreateP() {
    return ReactDOM.createPortal(
<h1>hello from createportal</h1>,
document.getElementById("portal-root")
    )
  
}

export default CreateP
