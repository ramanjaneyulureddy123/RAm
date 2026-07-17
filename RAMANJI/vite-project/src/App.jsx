import React from 'react'
import Reusable from '../../../week7/Day5 17-07-2026/Reusable'
import Parent from '../../../week7/Day5 17-07-2026/Parent'
import StudentForm from '../../../week7/Day5 17-07-2026/mini/StudentForm'
import StudentList from '../../../week7/Day5 17-07-2026/mini/StudentList'
import StudentContextAPI from '../../../week7/Day5 17-07-2026/mini/StudentContextAPI'

// import { Provider } from 'react-redux'
// import { store } from '../../../week7/Day4 16-07-2026/TodoRedux'
// import Thememini from '../../../week7/Day4 16-07-2026/Mini/Thememini'
// import { storee } from '../../../week7/Day4 16-07-2026/Mini/CounterSlice'
// import All from '../../../week7/Day4 16-07-2026/Mini/All'



function App() {
  return (
    <div>
{/* 
<Provider store={storee}>
<Thememini/>

</Provider> */}
{/* <Reusable 
item="SOFA"
quantity="1"
price="40000"
/> */}
 {/* <Parent/> */}
<StudentContextAPI>
 <StudentForm/>
 <StudentList/>
 </StudentContextAPI>


  </div>
  )
}

export default App
