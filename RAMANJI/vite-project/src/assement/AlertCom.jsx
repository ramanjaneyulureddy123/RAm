import React from 'react'

function AlertCom({type,message}) {
  return (
    <div>
      <p>{type}:{message}</p>
    </div>
  )
}

export default AlertCom
