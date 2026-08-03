import { configureStore } from '@reduxjs/toolkit'


import counterReducer from './reducer'

  export let store=configureStore({
    reducer:{
              count:counterReducer
    }
})

// 11111111111111111111111111111

