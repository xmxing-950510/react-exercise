/**
 * context class组件使用示例
 */
import React from 'react'
import { Button } from 'antd';

const ThemeContext = React.createContext('light');

// 父组件
export default class App extends React.Component {
  render() {
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

// 中间的组件再也不必指明往下传递 theme 了。
function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

// 孙子组件
class ThemedButton extends React.Component {
  static contextType = ThemeContext;
  render() {
    return <div>
      <Button theme={this.context} />
    </div>
    
  }
}

