import React from 'react'
import axios from "axios"
function AxiosPatch() {
    const changeEmail = () => {
    axios
      .patch("", {
        email: "anji2999@gmail.com"
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <button onClick={changeEmail}>
        Change Email
      </button>
    </div>
  )
}

export default AxiosPatch
