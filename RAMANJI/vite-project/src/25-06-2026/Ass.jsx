import React, { useEffect, useState } from 'react'

function Ass() {
    let [count,setCount]=useState(0)
        const increment=()=>{
            setCount(count+1)
        }
        const decrement=()=>{
            setCount(count-1)
        }

        let [users,setUsers]=useState([])
        useEffect(()=>{
            fetch("https://jsonplaceholder.typicode.com/users")
            .then(res=>res.json())
            .then(data=>setUsers(data))
        },[])

         const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 25000 },
    { id: 3, name: "Headphones", price: 2000 },
  ];

  const addToCart = (product) => {
    alert(`${product.name} added to cart`);
  };
  return (
    <div>
      <h1>count:{count}</h1>
      <button onClick={increment}>INC</button>
      <button onClick={decrement}>DEC</button>

      <ul>
        {users.map((user)=>(
<li key={user.id}>
    {user.name}-{user.id}
</li>
        ))}
      </ul>

       <h1>Products</h1>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: ₹{product.price}</p>
          <button onClick={() => addToCart(product)}>
            Add to Cart
          </button>
          <hr />
        </div>
      ))}
    </div>

  )
}

export default Ass
