import React from 'react'

function Objectdestrucing() {
    const products=[
        {id:1, name:"laptop", price:500},
        {id:2, name:"phone", price:500},
        {id:3, name:"chair", price:500}

    ]
  return (
    <div>
      <ul>
        {products.map(({id, name, price})=>(
            <li key={id}>
{name}-price is ${price}
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Objectdestrucing
