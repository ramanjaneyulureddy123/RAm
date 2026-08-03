import React, { useContext } from 'react'
import { LanguageContext } from './Language'

function Settings() {
    const {changeLanguage}=useContext(LanguageContext)
  return (
    <div>
    
      <button onClick={()=>changeLanguage("English")}>English</button>
          <button onClick={()=>changeLanguage("Telugu")}>Telugu</button>
<button onClick={()=>changeLanguage("Hindi")}>Hindi</button>
    
    </div>
  )
}

export default Settings
