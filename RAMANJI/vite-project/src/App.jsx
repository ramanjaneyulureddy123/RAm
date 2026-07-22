import React, { useState } from 'react'
import Useeffectwithoutdep from '../../../week8/Day2 21-07-2026/Useeffectwithoutdep'
import Cleartimeout from '../../../week8/Day2 21-07-2026/Cleartimeout'
import Fetch from '../../../week8/Day2 21-07-2026/Fetch'
import EAxios from '../../../week8/Day2 21-07-2026/EAxios'
import Counterapplication from '../../../week8/Counterapplication'
import Handlestateuseeffect from '../../../week8/Day2 21-07-2026/Handlestateuseeffect'
import Controlledcomponent from '../../../week8/Day3 22-07-2026/Controlledcomponent'
import ImplementAllinputs from '../../../week8/Day3 22-07-2026/ImplementAllinputs'
import Registrationform from '../../../week8/Day3 22-07-2026/Registrationform'
import Dynamic from '../../../week8/Day3 22-07-2026/Dynamic'


// import { Provider } from 'react-redux'
// import { store } from '../../../week7/Day4 16-07-2026/TodoRedux'
// import Thememini from '../../../week7/Day4 16-07-2026/Mini/Thememini'
// import { storee } from '../../../week7/Day4 16-07-2026/Mini/CounterSlice'
// import All from '../../../week7/Day4 16-07-2026/Mini/All'



function App() {
  const [show,setshow]=useState(true)
  return (
    <div>

      {/* <Fetch/> */}
      {/* <EAxios/> */}
      {/* <Counterapplication/> */}
      {/* <Student/> */}
      {/* <Handlestateuseeffect/> */}
      {/* <Controlledcomponent/> */}
      {/* <ImplementAllinputs/> */}
      {/* <Registrationform/> */}
      <Dynamic/>
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
{/* /* <StudentContextAPI>
 <StudentForm/>
 <StudentList/>
 </StudentContextA> */}
 {/* <Useeffectwithoutdep/> */}
 {/* <Cleartimeout/> */}
{/* {show && <Cleartimeout/>} */}
{/* <button onClick={()=>setshow(false)}>Remove component</button> */}




  </div>
  )
}

export default App
