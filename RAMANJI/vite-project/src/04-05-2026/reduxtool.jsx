import {configureStore,createSlice} from "@reduxjs/toolkit"

let counterSlice=createSlice({
    name:"counter",
    initialState:{count:10},
    reducers:{
        increment:(state)=>{
            state.count+=1
        }
    }
})


export const store=configureStore({
    reducer:counterSlice.reducer,
})

export const {increment}=counterSlice.actions