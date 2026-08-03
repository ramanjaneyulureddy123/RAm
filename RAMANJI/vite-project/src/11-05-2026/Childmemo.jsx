

import React, { memo } from 'react'

const Childmemo = memo(({name}) => {

    console.log("render");

    return (
        <div>
            <h1>Child Component</h1>
             <h1>{name}</h1>
        </div>
    )
})

export default Childmemo
