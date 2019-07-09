import React, { Component } from 'react'
import HOC from '../components/HOC'

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'list',
      list: 'list',
      obj: {
        a: 1
      }
    }
  }
  // 纯函数，无副作用
  static getDerivedStateFromProps(nextProps, prevState) {
    // console.log(nextProps, prevState)
    if (nextProps.name && nextProps.name !== prevState.name) {
      return {
        name: nextProps.name,
        list: nextProps.name,
        obj: {
          a: 2
        }
      }
    }
    return null
  }

  render() {
    // console.log('render')
    return <div style={{ height: 500 }}>{this.state.list}</div>
  }
  // 看是否需要初始化的时候调用
  componentDidMount() {}
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState)
    return nextProps.name !== nextState.name
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    // console.log(prevProps, prevState)
    return {
      name: 'getSnapshotBeforeUpdate',
      list: 'getSnapshotBeforeUpdate'
    }
    // console.log('getSnapshotBeforeUpdate')
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.log(prevProps, prevState, snapshot)
    // console.log('componentDidUpdate')
  }
}

export default HOC(Contact)
