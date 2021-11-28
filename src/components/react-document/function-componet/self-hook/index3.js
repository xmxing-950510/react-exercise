
import React, { useCallback, useEffect } from 'react';
import { useScroll } from './utils';

function ScrollTop() {
  const { y } = useScroll();

  const goTop = useCallback(() => {
    document.body.scrollTop = 0;
  }, []);

  const style = {
    position: "fixed",
    right: "10px",
    bottom: "10px",
  };
  console.log('y', y);
  // 当滚动条位置纵向超过 300 时，显示返回顶部按钮
  if (y > 100) {
    return (
      <button onClick={goTop} style={style}>
        Back to Top
      </button>
    );
  }
  // 否则不 render 任何 UI
  return null;
}

export default function Test() {
  useEffect(() => {
      document.addEventListener("scroll", handler);
    return () => {
      document.removeEventListener("scroll", handler);
    }
  }, [])

  const handler = () => {
    console.log(document.body.scrollTop);
  }

  return (
    <div>
      <div style={{height: '1600px', background:"pink"}}>
        超高的
      </div>
      <ScrollTop />
    </div>
    
  )
}
