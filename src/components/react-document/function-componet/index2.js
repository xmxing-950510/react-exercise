
import React from "react";
import { Button } from "antd";

function CountLabel({ count }) {
  // 子组件用于显示颜色
  const color = count > 10 ? "red" : "blue";
  return <span style={{ color }}>{count}</span>;
}

export default function Counter() {
  // 定义了 count 这个 state
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <Button  onClick={() => setCount(count + 1)}>
        <CountLabel count={count} />
      </Button>
    </div>
  );
}