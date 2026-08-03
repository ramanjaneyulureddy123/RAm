import React from 'react'
import Home from './day 03-08-2026/pages/Home'
import About from './day 03-08-2026/pages/About'
import Contact from './day 03-08-2026/pages/Contact'
import { Route, Routes } from 'react-router-dom'
import Navbar from './day 03-08-2026/pages/Navbar'
import Services from "./day 03-08-2026/pages/Services"
function App() {
  return (
    <>
    <Navbar/>
       <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/contact" element={<Contact />}/>
        <Route path="/services" element={<Services/>}/>

      </Routes>
    </>
  )
}

export default App
