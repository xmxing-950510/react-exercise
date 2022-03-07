import React  from 'react'

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // 为了在回调中使用 `this`，这个绑定是必不可少的
    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick() {
  //   console.log('this', this);
  //   this.setState(state => ({
  //     isToggleOn: !state.isToggleOn
  //   }));
  // }

  // 用箭头函数表示
  handleClick = () => {
    console.log('this', this);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

export default Toggle