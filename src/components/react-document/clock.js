import React, { Component } from 'react'

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date()
    }
  }
  // 在组件被渲染到DOM中后运行
  componentDidMount() {
    console.log('componentDidMount');
    this.timerID = setInterval(() => {
      this.tick()
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  // 每次组件更新 render方法都会调用
  render() {
    console.log('Clock render被调用了');
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Clock