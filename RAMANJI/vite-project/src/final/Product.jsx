import React, { useState } from "react"

function App(){
    const [cart,setCart]=useState([])
    const products=[
        {name:"mobile",price:16000},
        {name:"watch",price:1600},
        {name:"laptop", price:43000}
    ]
    const addToCart=(product)=>{
        setCart([...cart,product])
    }
    return(
        <div>
            <Product products={products} addToCart={addToCart}/>
            <Cart cart={cart}/>
        </div>
    )
}

function Product({products,addToCart}){
return(
    <div>
        {products.map((product,index)=>(
            <div key={index}>
            <h2>{product.name}</h2>
            <h3>{product.price}</h3>
            <button onClick={()=>addToCart(product.name)}>AddToCart</button>
            </div>
        ))}
    </div>
)
}

function Cart({cart}){
    return(
        <div>
            <h1>cart items</h1>
            {cart.map((item,index)=>(
                <div key={index}>{item}</div>
                ))}
        </div>
    )
}  

export default App