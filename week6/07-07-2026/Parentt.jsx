import React from 'react'
import Childd from './Childd'
import Childone from './Childone';
import Childtwo from './Childtwo';
import State from './State';
import Practice from './Practice';

function Parentt() {

    const name="anji";
    const role="maintanance engineer"

    const information ="that is about my company rules"
  return (
    <div>
        <h1>parent component</h1>
        <Childd name={name} role={role} />
        {/* <Childd/>
        <Childd/> */}

        <Childone information={information}/>
      <Childtwo information={information} />

 <Practice  title="Laptop" price="₹50,000" />
      <Practice title="Mobile" price="₹20,000" />
      <Practice title="Tablet" price="₹30,000" />
       
    </div>
  )
}

export default Parentt
