import React from 'react'
import { foo } from '../actions/index'
import { store } from '../index'

const active = { border: '10px solid lime' },
  noActive = { border: '10px solid transparent' }

const HOC = WrappedComponent =>
  class extends WrappedComponent {
    state = {
      active: false
    }
    handle = () => {
      this.setState({
        active: !this.state.active,
        name: Math.floor(Math.random() * 10)
      })
      store.dispatch(foo({ active: !this.state.active }))
    }
    static getDerivedStateFromProps(nextProp, nextState) {
      // console.log(nextProp, nextState)
      return null
    }
    componentDidMount() {
      // console.log(this, this.props)
    }
    render() {
      return (
        <div
          style={this.state.active ? active : noActive}
          onClick={this.handle}
        >
          <WrappedComponent name={this.state.name} />
        </div>
      )
    }
  }

export default HOC
