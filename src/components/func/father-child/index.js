import React, { Component } from 'react'
import { Button } from 'antd';
import Child from './child'
let count = 0

class Father extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '你好'
    };
    console.log('father---constructor');
  }
  componentDidMount(){
    console.log('father---componentDidMount');
  }

  handleClick() {
    const str = this.state.name
    count = count + 1
    this.setState({
      name: str + count
    })
  }

  render() {
    console.log('father---render');
    return <div>
      <h2>我是father</h2>
      <Button type="primary" onClick={() => {this.handleClick()}}>点击</Button>
      <Child name={this.state.name}></Child>
    </div>
  }
}

export default Father
