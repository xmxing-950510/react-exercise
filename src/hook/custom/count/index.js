
import { Button } from 'antd';
import React from 'react';
import useCounter from './count';

export default function Counter() {
  // 调用自定义 Hook
  const { count, increment, decrement, reset } = useCounter();

  // 渲染 UI
  return (
    <div>
      <Button onClick={decrement}> - </Button>
      <p>{count}</p>
      <Button onClick={increment}> + </Button>
      <Button onClick={reset}> reset </Button>
    </div>
  );
}