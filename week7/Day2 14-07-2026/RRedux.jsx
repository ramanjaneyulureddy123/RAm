import React from 'react'
import {createStore} from "redux"
let initialState={
    sum:0
}


function reducer(state=initialState,action) {
    switch(action.type){
        case "increment":
            return{
                ...state,
                sum :state.sum + action.payload
            };       
    
    case "decrement":
        return{
            ...state,
            sum:state.sum - action.payload
        }
         default:
                return state; 
}
}

export let store=createStore(reducer)