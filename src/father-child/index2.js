/**
 * 类组件 父组件通过refs调用子组件的方法
 */
import { Button } from 'antd';
import React from 'react';
class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  changeState() {
    const { count } = this.state
    this.setState({
      count: count + 1
    })
  }
  render() {
    return (
      <div>
        <h3>child</h3>
        <div>我的数据是 {this.state.count}</div>
      </div>
    )
  }
}

export default class father extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  handleChange(){
    this.myRef.current.changeState()
  }
  render() {
    return (
      <div>
        <h3>father</h3>
        {/*  */}
        <Button onClick={() => {this.handleChange()}}>改变子组件的数据</Button>
        <div>---------------------------</div>
        {/*  */}
        <Child ref={this.myRef}/>
      </div>
    );
  }
}
