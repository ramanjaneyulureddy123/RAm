// {configureStore,createSlice} from "@reduxjs/toolkit"
import counterReducer from "./Reduxtoolkit"



// const initialState={value:10}

let Counter=createSlice({
    name:"counter",
    initialState: {value:10},
    reducers:{
        increment:(state)=>{
            state.value +=1
        },
        decrement:(state)=>{
            state.value -= 1
        }
    }
})

export default Counter.reducer

export const {increment, decrement}=Counter.actions

export let store=configureStore({
    reducer:{
        counter:counterReducer 
    }
})



