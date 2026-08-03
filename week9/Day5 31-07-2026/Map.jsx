// import React from 'react'

// function Map() {
//     const names=["Anji", "Ramu", "Vijay", "Raju"]

//     const students=[
//         {id:1, name:"Ali"},
//         {id:2, name:"suresh"},
//         {id:3, name:"imran"}
//     ]
//   return (
//     <div>
//           <ul type="square">
//       {names.map((name,index)=>(
//             <li key={index}>
// {name}
//             </li>
       
//       ))}
//        </ul>

//        {/* ----------- */}
// <ul>
//        {students.map((student)=>(
//         <li>
// {student.name}
//         </li>
//        ))}
// </ul>
//     </div>
//   )
// }

// export default Map

import React from 'react'

function Map() {
    const students=[
        {
            id:1, name:"Anji",subjects:["math", "science"]
        },
        {
            id:2, name:"Ramu", subjects:["english","computer"]
        }
    ]
  return (
    <div>
      {students.map((student)=>(
        <div key={student.id}>
            <h3>{student.name}</h3>

            <ul>
                {student.subjects.map((subject)=>(
                    <li key={subject}>
                       {subject}
                    </li>
                ))}
            </ul>
            </div>
      ))}
    </div>
  )
}

export default Map

