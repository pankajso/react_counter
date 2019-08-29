import React from 'react'

class Counter extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      counter: 0,
      total: 0
    }
  }
  increment = () => {
    const c = this.state.counter
    this.setState({ counter: c + 1 })
  }
  decrement = () => {
    const c = this.state.counter
    this.setState({ counter: c - 1 })
  }
  render () {
    return (
      <p>
        <button
          onClick={() => {
            this.increment()
          }}
        >
          +
        </button>
        {this.state.counter}
        <button
          onClick={() => {
            this.decrement()
          }}
        >
          -
        </button>
      </p>
    )
  }
}
export default Counter
