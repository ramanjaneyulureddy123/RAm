import React from 'react'
import CC1 from './CC1'
import CC2 from './CC2'

function PP() {
  return (
    <div>
      <h1>This is Parent Copmonent</h1>
<CC1  age={20}/>
<CC2  name="anji"/>

<CC1  age={23} />
<CC2  name="ajay" />

    </div>
  )
}

export default PP
