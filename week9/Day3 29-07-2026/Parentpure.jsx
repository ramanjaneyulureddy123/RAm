import React, { PureComponent } from 'react'
import Compure from './Compure'

export default class Parentpure extends PureComponent {

    state={
        count:0,
        name:"Ravi"
    }
  render() {
    return (
      <div>
        <button onClick={()=>this.setState({count:this.state.count+1})}>Count:{this.state.count}</button>
        <Compure name={this.state.name}/>
      </div>
    )
  }
}
