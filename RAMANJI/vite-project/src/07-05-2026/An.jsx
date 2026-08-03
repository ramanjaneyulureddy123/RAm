// import React, { useContext } from 'react'
// import { context } from './Gobal'

// function An() {
//     let {b,setb}=useContext(context)

//   return (
//     <div>
//       <button onClick={()=>setb(b-1)}>Decrement</button>
//       <h1>{b}</h1>
//     </div>
//   )
// }

// export default An

import React, { useState } from "react";

function An() {

  const [loading, setLoading] = useState(false);

  const fetchData = () => {

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3000);

  };

  return (
    <div>

      <button onClick={fetchData}>
        Fetch Data
      </button>

      {
        loading ? (
          <h1>Loading...</h1>
        ) : (
          <h1>Data Loaded</h1>
        )
      }

    </div>
  );
}

export default An;
