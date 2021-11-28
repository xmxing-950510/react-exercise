/**
 * 
 */
import React, { useState } from 'react';
import { Button } from 'antd';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(10)
  console.log('counter-----');
  const handleIncrement = () => {
    console.log('handleIncrement');
    setCount(count + 1)
  };
  const handleSubtract = () => {
    console.log('handleSubtract');
    setCount2(count2 - 1)
  }
  // ...
  return (
    <div>
      <Button onClick={handleIncrement}>+</Button>
      <Button onClick={handleSubtract}>-</Button>
    </div>
  )
}
