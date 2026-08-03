import React from 'react'

function Switchcase() {
    const job="Labour"

    const rendering=()=>{
        switch(job){
            case "hardware":
                return <h1>maintainance enginner</h1>

                case "Labour":
                    return <h1>shift wise in foxcon</h1>

                    case "EEE job":
                    return <h1>panel testing</h1>

                    default :
                    return <h1>No use</h1>
        }
    }
  return (
    <div>
      {rendering()}
    </div>
  )
}

export default Switchcase
