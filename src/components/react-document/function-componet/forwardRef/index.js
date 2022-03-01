import React, { useImperativeHandle } from 'react';

function Child(props, ref){
  useImperativeHandle(ref, () =>({
    handleClick: handleClick,
    say: () => {console.log('你好呀');}
  }))
  const handleClick = () => {
    console.log('子组件被点击');
  }
  return (<div>
    <h3>我是子组件</h3>
    <div>{props.state}</div>
  </div>)
}

const ChildWrap = React.forwardRef(Child)

export default function Counter () {
  const [count, setCount] = React.useState(2)
  const ref = React.useRef(null)

  const handleFatherClick = () => {
    ref.current.say();
    setCount(count + 1)
  }
  return (
    <div>
      <ChildWrap ref={ref} state={count}></ChildWrap>
      <button onClick={handleFatherClick}>我是父组件button</button>
    </div>
  )
}