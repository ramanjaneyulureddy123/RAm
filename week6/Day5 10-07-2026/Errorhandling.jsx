import React, { useState } from 'react'

function Errorhandling() {
     const [message, setMessage] = useState("")

     const getData=async()=>{
      try {
      setMessage("Loading...");

      const response = await fetch("https://jsonplaceholder.typicode.com/users");

      // invalid response check 
      if (!response.ok) {
        throw new Error("404 not found");
      }

      const data = await response.json();

        // Invalid data check
      if (!Array.isArray(data)) {
        throw new Error("Invalid data received")
      }

      setMessage("Data loaded successfully!");

      console.log(data);

    } catch (error) {
      setMessage("Something went wrong. Please try again.");
      console.log(error);
    }
  }
  return (
    <div>
      <button onClick={getData}>
        Get Data
      </button>

      <p>{message}</p>
    </div>
  )
}

export default Errorhandling


// if success u got data loaded successfully
// internet off and apierror u got -- failed to fetch
// if wrong response ==== invalid date received 

