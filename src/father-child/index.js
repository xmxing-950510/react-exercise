/**
 * props 通信
 */
import { Button } from 'antd'
import React, { useState } from 'react'

function Child(props) {
  const { data, add  } = props
  const handleClick = () => {
    add()
  }
  return (
  <div>
    <h3>child</h3>
    <div>父组件的数据：{data}</div>
    <Button onClick={() => handleClick()}>+</Button>
  </div>
  )
}

export default function Counter() {
  
  const [count, setCount] = useState(0)
  
  const handleAdd = () => {
    setCount(count + 1)
  }
  return (
    <div>
      <h3>father</h3>
      <div>---------------------------</div>
      <Child data={count} add={handleAdd}/>
    </div>
  )
}