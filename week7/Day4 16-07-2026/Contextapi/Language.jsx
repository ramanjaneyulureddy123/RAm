import React, { createContext, useState } from 'react'
import Header from './Header'
import Settings from './Settings'
 export const LanguageContext=createContext()

function Language() {

    const [language, setLanguage]=useState("")

    const changeLanguage=(lang)=>{
        setLanguage(lang)
    }
  return (
    <div>
    <LanguageContext.Provider value={{language, changeLanguage}}>
        <Header/>
        <Settings/>
        </LanguageContext.Provider>   
    </div>
  )
}

export default Language
