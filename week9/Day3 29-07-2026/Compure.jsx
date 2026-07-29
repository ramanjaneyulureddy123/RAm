import React, { PureComponent } from 'react'

export default class Compure extends PureComponent {
  render() {
    console.log("child rendering")
    return <h2>{this.props.name}</h2>
  }
}

