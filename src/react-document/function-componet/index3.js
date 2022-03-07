import React from "react";


function CountLabel({ count }) {
  // 子组件用于显示颜色
  const color = count > 10 ? "red" : "blue";
  return <span style={{ color }}>{count}</span>;
}

export default function Counter() {
  // 定义了 count 这个 state
  const [count, setCount] = React.useState(0);

  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { onClick: function onClick() {
          return setCount(count + 1);
        } },
      React.createElement(CountLabel, { count: count })
    )
  );
}






