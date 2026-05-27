import React from 'react'
// import CartApp from './15-05-2026/Cart'

import Red from './20-05-2026/Red'
import { Provider } from 'react-redux'
import { store } from './20-05-2026/Reduxtopic'
function App() {
  return (
    <div>
      {/* <Product/> */}

      {/* <Appp/> */}
      {/* <Eventhandling/> */}
      <Provider store={store}>
        <Red/>
      </Provider>

      
    </div>
  )
}

export default App
