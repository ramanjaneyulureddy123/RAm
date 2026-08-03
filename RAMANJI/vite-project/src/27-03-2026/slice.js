import { createSlice } from "@reduxjs/toolkit";




let slice=createSlice({
    name:"form",
    initialState:{name: "" },
    reducers:{
        setName:(state,action)=>{
state.name=action.payload;
        },
    },
})

export default slice.reducer
export const {setName}=slice.actions