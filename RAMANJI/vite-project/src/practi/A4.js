import { createStore } from "redux";



let initialState={
    count:12
}

function reducer(state=initialState,Actions){
    switch (Actions.type) {
        case "A":
            return {
                state,
                count:state.count+1
            }
            break;
            case "B":
                return{
                    state,
                    count:state.count-1
                }
    
        default:
            return state;
            break;
    }

}

export let store=createStore(reducer)

