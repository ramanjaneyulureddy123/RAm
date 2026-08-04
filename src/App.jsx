import React from 'react'
// import Home from './day 03-08-2026/pages/Home'
// import About from './day 03-08-2026/pages/About'
// import Contact from './day 03-08-2026/pages/Contact'
import { Route, Routes } from 'react-router-dom'
// import Navbar from './day 03-08-2026/pages/Navbar'
// import Services from "./day 03-08-2026/pages/Services"
import HOME from './day 04-08-2026/Page/HOME'
import Dashboard from './day 04-08-2026/Page/Dashboard'
import ThirdPage from './day 04-08-2026/Page/ThirdPage'
import SecondPage from './day 04-08-2026/Page/SecondPage'
function App() {
  return (
    <>
    {/* <Navbar/>
       <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/contact" element={<Contact />}/>
        <Route path="/services" element={<Services/>}/>

      </Routes> */}

      <Routes>
        <Route  path="/" element={<HOME/>}/>

        <Route path="/dashboard" element={<Dashboard/>} >
        <Route  path="third" element={<ThirdPage/>}/>
        <Route path="seconnd" element={<SecondPage/>}/>
        </Route>


      </Routes>
    </>
  )
}

export default App
