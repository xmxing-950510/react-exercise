/**
 * 计数器
 */
import React from 'react';
import { Button } from 'antd';


export default function Counter () {
  const [count, setCount] = React.useState(0)
  return (
    <div>
      <Button onClick={() => setCount(count + 1)}>{count}</Button>
    </div>
  )
}