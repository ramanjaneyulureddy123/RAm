import React, { useState } from 'react'
import Main from '../../../week9/Day3 29-07-2026/Practice/Main'
import EventbindingF from '../../../week9/Day4 30-07-2026/EventbindingF'
import Passparameter from '../../../week9/Day4 30-07-2026/Passparameter'
import Inlineeventhandler from '../../../week9/Day4 30-07-2026/Inlineeventhandler'
import All from '../../../week9/Day4 30-07-2026/All'
import Modal from '../../../week9/Day4 30-07-2026/Reactportals.jsx/Modal'
import Popup from '../../../week9/Day4 30-07-2026/Reactportals.jsx/Popup'
import CreateP from '../../../week9/Day4 30-07-2026/Reactportals.jsx/CreateP'
import Tooltip from '../../../week9/Day4 30-07-2026/Reactportals.jsx/Tooltip'
import Modelmini from '../../../week9/Day4 30-07-2026/mini/Modelmini'

function App() {

  // const [showModal , setShowModal]=useState(false)
  // const [showPopup, setShowPopup] = useState(false);
//  const [show, setShow] = useState(false);
// mini 
 const [show, setShow] = useState(false);

 const handleOpen=()=>{
  setShow(true)
 }

  const handleClose = () => {
    setShow(false);
  };

 
  return (
    <div>
    
      {/* <EventbindingF/> */}
      {/* <Passparameter/> */}
      {/* <Inlineeventhandler/> */}
      {/* <All/> */}

    {/* <button onClick={()=>setShowModal(true)}>Open Model</button>
    
    {showModal && (
      <Modal  close={()=>setShowModal(false)}/>
    )} */}

 {/* <button onClick={() => setShowPopup(true)}>Show Popup</button>

       {showPopup && (
        <Popup close={() => setShowPopup(false)} />
      )} */}



       {/* <button
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        Hover Me
      </button>

      {show && <Tooltip text="This is a tooltip" />} */}


{/* MINI  */}
      <button onClick={handleOpen}>
        Open Modal
      </button>

      {show && <Modelmini close={handleClose} />}
    </div>
  )

{/* <h2>hello from app</h2>
<CreateP/> */}
    // </div>
  // )
}

export default App
