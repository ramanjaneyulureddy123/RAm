import React from 'react'

import { Provider } from 'react-redux'
import { store } from '../../../week7/Day4 16-07-2026/TodoRedux'
import Thememini from '../../../week7/Day4 16-07-2026/Mini/Thememini'
import { storee } from '../../../week7/Day4 16-07-2026/Mini/CounterSlice'
import All from '../../../week7/Day4 16-07-2026/Mini/All'



function App() {
  return (
    <div>


<Provider store={storee}>
<Thememini/>
{/* <All/> */}

</Provider>

  </div>
  )
}

export default App
