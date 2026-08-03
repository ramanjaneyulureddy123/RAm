
import React, { PureComponent } from 'react'

export class Puremessage extends PureComponent {
  render() {
    return (
      <div>
 <h3>Pure component example:{this.props.name}</h3>

      </div>
    )
  }
}

export default Puremessage
