
import React from 'react';
import { useCounter } from './utils'
import { Button } from 'antd';

export default function Counter() {
  // 调用自定义 Hook
  const { count, increment, decrement, reset } = useCounter();

  // 渲染 UI
  return (
    <div>
      <p>{count}</p>
      <Button onClick={decrement}> - </Button>
      <Button onClick={increment}> + </Button>
      <Button onClick={reset}> reset </Button>
    </div>
  );
}