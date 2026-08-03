import React, { PureComponent } from 'react'

export default class PureUser extends PureComponent {
  render() {
    console.log("Pure component rendering")
    return (
      <div>
        <button onClick={this.props.click}> Click Child</button>
      </div>
    )
  }
}
