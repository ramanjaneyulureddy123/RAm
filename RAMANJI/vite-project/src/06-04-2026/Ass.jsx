import React, { useState } from 'react'


function Ass() {

      const [products] = useState([
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Smartphone", price: 15000 },
    { id: 3, name: "Headphones", price: 2000 },
    { id: 4, name: "Keyboard", price: 1200 },
  ]);

  const handleAddToCart = (product) => {
    alert(`Added ${product.name} to cart!`);
  };


    let [count,setCount]=useState(0)
    const increment =()=>{
        setCount(count+1)
    }
    const decrement=()=>{
        if (count > 0){
            setCount(count-1)
        }
    }
        const reset=()=>{
            setCount(0)
        }
    
  return (
    <div style={{textAlign:'center'}}>
        <h1>Count{count}</h1>
      <button onClick={increment}>increase</button>
      <button onClick={decrement}> decrement</button>
      <button onClick={reset}>Reset</button>

       <h1>Products</h1>
      <ul style={{ listStyle: "none", padding:0}}>
        {products.map((product) => (
          <li
            key={product.id}
            
          >
            <strong>{product.name}</strong> <br />
            Price: ₹{product.price} <br />
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      
    </div>
  )
}

export default Ass
