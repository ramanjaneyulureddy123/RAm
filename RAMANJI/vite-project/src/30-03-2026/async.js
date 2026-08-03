import { createStore } from "redux";



let initialState={
  sum:40
}

function reducer(state=initialState,Actions){
  switch (Actions.type) {
    case "a":
      console.log(Actions.payload)
      return {
        ...state,
        sum:state.sum + Actions.payload
      }
      break;
      case "b":
      return {
        ...state,
        sum:state.sum - Actions.payload
      }
  
    default:
      return state;
  }
}




 export let store=createStore(reducer)
 