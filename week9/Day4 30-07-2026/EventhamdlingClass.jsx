// import React, { Component } from 'react'

// export default class EventhamdlingClass extends Component {

//     handleSubmit=(event)=>{
//         event.preventDefault()
//         alert("form submitted")
//     }
//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//             <input  type="email"/>
//             <input type="password"/>
//             <button type="submit">submit</button>
//         </form>
//       </div>
//     )
//   }
// }


import React, { Component } from 'react'

export default class EventhamdlingClass extends Component {
    state={
        count:0
    }

    handleClick=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
  render() {
    return (
      <div>
        <p>Count:{this.state.count}</p>
        <button onClick={this.handleClick}>Increase</button>
      </div>
    )
  }
}

