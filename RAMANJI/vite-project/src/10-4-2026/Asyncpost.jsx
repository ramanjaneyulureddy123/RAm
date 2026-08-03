import axios from 'axios'
import React from 'react'

function Asyncpost() {
    const Adduser=async ()=>{
        try{
            const response= await axios.post("https://jsonplaceholder.typicode.com/users", {
                name:"Vijay",
                email:"anji334@gmailcom"
            })
            console.log(response.data)
        }
        catch(error){
            console.log(error)
        }
    }
  return (
    <div>
      <button onClick={Adduser}>click</button>
    </div>
  )
}

export default Asyncpost
