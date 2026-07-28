import React from 'react'
import usewindowsize from './usewindowsize';

function Window() {

  const { width, height } = usewindowsize();
  return (
    <div>
      <h2>Window Width: {width}</h2>
      <h2>Window Height: {height}</h2>
    </div>
  )
}

export default Window
