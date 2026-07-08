import React, { Component } from 'react'

export default class M1 extends Component {
  render() {
    return (
      <div>
        <h2>Studnt Details</h2>

        <p>Name:{this.props.name}</p>
        <p>Course: {this.props.course}</p>
      </div>
    )
  }
}
