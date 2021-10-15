import React, { Component } from 'react'

class RefDemo extends Component {

  constructor() {
    super()
    this.objRef = React.createRef()
    // 创建完成后 this.objRef 默认等于 {current: null}
  }

  componentDidMount() {
    setTimeout(() => {
      this.refs.stringRef.textContent = 'string ref got'
      this.methodRef.textContent = 'method ref got'
      this.objRef.current.textContent = 'obj ref got'
    })
  }
  render() {
    return(
      <>
        <p ref="stringRef">span1</p>
        <p ref={ele => (this.methodRef = ele)}>span2</p>
        <p ref={this.objRef}>span3</p>
      </>
    )
  }
}

export default RefDemo

