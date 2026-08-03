import { createStore } from "redux";

let initialState={
    sum:0
}
function reducer(state=initialState,action){
    switch(action.type){
        case "a":
            return{ sum:state.sum+1
        }
        case "b":
            return{ sum:state.sum-1
        }
        default:
            return state
    }

}
export let store=createStore(reducer)