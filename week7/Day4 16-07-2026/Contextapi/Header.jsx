import React,{useContext} from 'react'

import { LanguageContext } from './Language'

function Header() {
          const {language} = useContext(LanguageContext)

  return (
    <div>
   
   <h1>current Language:{language}</h1>
    </div>
  )
}

export default Header
