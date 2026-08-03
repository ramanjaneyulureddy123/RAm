import { createSlice } from "@reduxjs/toolkit";



const initialState={
    value:10
}


let counter=createSlice({
    name:"count",
    initialState,
    reducers:{
        inc:(state)=>{
            state.value+=1
        },
        dec:(state)=>{
            state.value-=1

        }
        }

})

export default counter.reducer
export const {inc, dec}=counter.actions
// 222222222222222222222222222




