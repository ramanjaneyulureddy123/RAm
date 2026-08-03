import React, { useContext } from 'react'
import { themeContext } from './Theme'

function TFotter() {
    const {theme}=useContext(themeContext)
  return (
    <div>
      <h2>Footer theme:{theme}</h2>
    </div>
  )
}

export default TFotter
