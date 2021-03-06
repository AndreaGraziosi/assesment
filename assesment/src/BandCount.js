import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = { count: 0 }
  }

  increment() {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <div>
        <h1>{this.count}</h1>
        <button onClick={(e) => {
          this.increment()
        }}>Click</button>
      </div>
    )
  }
}
export default Counter