import { Button } from 'antd';
import React from 'react'
import {ThemeContext} from './theme-context';

class ThemedButton extends React.Component {
  render() {
    let props = this.props;
    let theme = this.context;
    return (
      <Button
        {...props}
        style={{backgroundColor: theme.background}}
      >aaa</Button>
    );
  }
}
ThemedButton.contextType = ThemeContext;

export default ThemedButton;