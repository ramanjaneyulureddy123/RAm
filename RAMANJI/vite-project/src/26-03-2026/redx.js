import { connect } from "react-redux";
import { createStore } from "redux";


let initialState={
    sum:5
}

function reducer(state=initialState,Actions){
    switch(Actions.type){
        case "ADD":
            return {
                sum:state.sum+1
            }
            break;
            case"SUB":
            return {
                sum:state.sum-1
            }
            break;
            default:
             return state;
        
    }

}


export let store=createStore(reducer)
