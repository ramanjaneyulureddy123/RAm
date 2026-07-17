import { configureStore, createSlice } from "@reduxjs/toolkit";


const counterSlice= createSlice({
    name:"counter",
    initialState:{value:0},
    reducers:{
        INC :(state)=>{
            state.value +=1
        },
        DEC :(state)=>{
            state.value -=1
        }
    }
})

export const {INC, DEC}=counterSlice.actions

export const storee =configureStore({
    reducer:{
        counter:counterSlice.reducer
    }
})

export default counterSlice.reducer


