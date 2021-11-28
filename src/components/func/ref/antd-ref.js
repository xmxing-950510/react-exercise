import React, { Component } from 'react'
import { Tabs } from 'antd'
import Forward from './forward-ref'
const { TabPane } = Tabs





class App extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  componentDidMount() {
    console.log(this.textInput.current);
  }

  render() {

    return (
      <div>
        <Tabs 
          activeKey={"0"}
        >
          <TabPane tab="ref" key="0">
            <Forward ref={this.textInput} />
          </TabPane>
        </Tabs>
      </div>
      
      
    );
  }
}

export default App