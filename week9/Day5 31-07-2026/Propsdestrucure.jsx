// import React from 'react'

// function Propsdestrucure({name, city}) {
//   return (
//     <div>
//       <h2>{name}</h2>
//       <p>{city}</p>
//     </div>
//   )
// }

// export default Propsdestrucure

import React, { useState } from 'react'

function Propsdestrucure({name}) {
     const [likes, setLikes] = useState(0)
  return (
    <div>
       <h2>{name}</h2>

      <p>Likes:{likes}</p>

      <button onClick={()=>setLikes(likes + 1)}>
        Like
      </button>
    </div>
  )
}

export default Propsdestrucure

