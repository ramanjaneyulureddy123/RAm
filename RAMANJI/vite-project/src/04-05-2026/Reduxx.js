import React from 'react'
import { combineReducers, createStore } from 'redux'

let initialState={
    sum:0
}
function reducer(state=initialState,action) {
    switch(action.type){
        case "increment":
            return{
                sum :state.sum + action.payload
            };       
    
    case "decrement":
        return{
            sum:state.sum- action.payload
        }
         default:
                return state; 
}
}
const userInitial = { name: "Guest" };

function userReducer(state = userInitial, action) {
  switch (action.type) {
    case "setName":
      return { name: action.payload };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  counter: reducer,
  user: userReducer,
});

 

export let store = createStore(rootReducer)