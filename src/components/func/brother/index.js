import React, { Component } from 'react'

class Child1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text:'Child1'
    };
  }
  onChange=()=>{
    this.setState({
        text:'Child1 onChange'
    })
  }
  componentDidMount(){
    this.props.onRef && this.props.onRef(this)
  }
 
  render() {
    return (
      <div>{this.state.text}</div>
    );
  }
}

class Child2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render() {
    return (
        <div onClick={this.props.onClick}>Child2</div>
    );
  }
}

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }
  onRef=(ref)=>{
    this.child1=ref;
  }
 
  render() {
    return (
      <div className="home">
      <Child1 onRef={this.onRef}/>
      <Child2 onClick={
        ()=>{
          this.child1.onChange&&this.child1.onChange()
        }
      } />
      </div>
    );
  }
 }
export default Home