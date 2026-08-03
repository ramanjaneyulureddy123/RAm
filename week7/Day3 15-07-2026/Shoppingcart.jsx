const initialState={
    count:0
}

function reducer(state,action){
    switch(action.type){
        case "ADD":
            return {
                count:state.count+1
            }

            case "Remove":
                return {
                    count:state.count-1
                }

                default:
                     return state;
    }
}

import React, { useReducer } from 'react'

function Shoppingcart() {

    const [cart,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
      <h2>Shopping Cart</h2>
      <h3>Items in Cart:{cart.count}</h3>
      <button onClick={()=>dispatch({type:"ADD"})}>Add Item</button>
      <button onClick={()=>dispatch({type:"Remove"})}>Remove</button>
    </div>
  )
}

export default Shoppingcart
