import React from 'react'
import Sgrandchild from './Sgrandchild'

function Rchild({dataa}) {
  return (
    <div>
      <h1>{dataa}</h1>
      <Sgrandchild info={dataa}/>
    </div>
  )
}

export default Rchild
