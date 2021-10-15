import React, { Component } from 'react'

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
    console.log('child---constructor');
  }
  componentDidMount(){
    console.log('child---componentDidMount');
  }
  render() {
    console.log('child---render');
    const { name } = this.props
    return <div>
      <h2>我是child</h2>
      <div>{name}</div>
    </div>
  }
}

export default Child