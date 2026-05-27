import { useState } from "react"

function Product({ addToCart }) {
  return (
    <button onClick={()=>addToCart("Laptop")}>
      Add To Cart
    </button>
  )
}

function Cart({cart}) {
  return (
    <div>
      <h1>Cart Items</h1>
      {
        cart.map((item, index)=>(
          <h3 key={index}>{item}</h3>
        ))
      }
    </div>
  )
}

function App() {
  const [cart, setCart] = useState([])
  const addToCart=(product)=>{
    setCart([...cart, product])
  }
  return (
    <div>
      <Product addToCart={addToCart}/>
      <Cart cart={cart} />
    </div>
  )
}

export default App