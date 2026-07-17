import React, { useState } from 'react'
import Reusable from './Reusable'

function Parent() {
    const [items, setItems] = useState([
    {
      id: 1,
      item: "Laptop",
      quantity: 1,
      price: 50000
    },
    {
      id: 2,
      item: "Mobile",
      quantity: 2,
      price: 30000
    }
  ])

  const additem=()=>{
    const newitem={
        id:Date.now(),
         item: "Headphones",
      quantity: 1,
      price: 2000
    }
    setItems([...items, newitem])
  }

  const deleteitem=(id)=>{
    setItems(items.filter((item)=> item.id !==id))
  }
  return (
    <div>
      <button onClick={additem}>Add item</button>


      {
        items.map((item)=>{
            return(
            <Reusable
            key={item.id}
            id={item.id}
            item={item.item}
            quantity={item.quantity}
            price={item.price}
            deleteitem={deleteitem}
            
            />
            )
        })
      }
    </div>
  )
}

export default Parent
