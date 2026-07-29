import React, { useState, useCallback } from "react";



function CallB() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  return (
    <div>
     <MemoChild handleClick={handleClick}/>

      <button onClick={() => setCount(count + 1)}>
        Count {count}
      </button>
    </div>
  );
}

export default CallB;

function Child({handleClick}){
    console.log("child rendering")
    return(
        <div>
            <button onClick={handleClick}> child buttom</button>
        </div>
    )
}

const MemoChild=React.memo(Child)


// first child  rendring --- button clcik evert time -- inc count no render 
// function CallB() {
//   const [count, setCount] = useState(0);

//   const handleClick = () => {
//     console.log("Clicked");
//   };

//   return (
//     <div>
//     <button onClick={() => setCount(count + 1)}>
//       Count {count}
//     </button>

//     <button onClick={handleClick}>
//   Click Me
// </button>
// </div>
//   );
// }

// export default CallB