
import { useState, useCallback, useEffect }from 'react';
 
function useCounter() {
  // 定义 count 这个 state 用于保存当前数值
  const [count, setCount] = useState(0);
  // 实现加 1 的操作
  const increment = useCallback(() => setCount(count + 1), [count]);
  // 实现减 1 的操作
  const decrement = useCallback(() => setCount(count - 1), [count]);
  // 重置计数器
  const reset = useCallback(() => setCount(0), []);
  
  // 将业务逻辑的操作 export 出去供调用者使用
  return { count, increment, decrement, reset };
}

/**
 * 请求通用 
 */
 const useAsync = (asyncFunction) => {
   // 设置三个异步逻辑相关的 state
   const [data, setData] = useState(null);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);

   // 定义一个 callback 用于执行异步逻辑
   const execute = useCallback(() => {
     // 请求开始时，设置 loading 为 true，清除已有数据和 error 状态
     setLoading(true);
     setData(null);
     setError(null);
     return asyncFunction()
       .then((response) => {
         // 请求成功时，将数据写进 state，设置 loading 为 false
         setData(response);
         setLoading(false);
       })
       .catch((error) => {
         // 请求失败时，设置 loading 为 false，并设置错误状态
         setError(error);
         setLoading(false);
       });
   }, [asyncFunction]);
 
   return { execute, loading, data, error };
 };


/**
 * 滚动条
 */ 
 // 获取横向，纵向滚动条位置
 const getPosition = () => {
    if(document.compatMode === 'CSS1Compat') {
      return {
        x: document.documentElement.scrollLeft, 
        y: document.documentElement.scrollTop 
      }
    } else {
      return {
        x: document.body.scrollLeft,
        y: document.body.scrollTop
      }
    }
   
 };
const useScroll = () => {
    // 定一个 position 这个 state 保存滚动条位置
    const [position, setPosition] = useState(getPosition());

    useEffect(() => {
      const handler = () => {
        setPosition(getPosition(document));
      };
      // 监听 scroll 事件，更新滚动条位置
      document.addEventListener("scroll", handler);
      return () => {
        // 组件销毁时，取消事件监听
        document.removeEventListener("scroll", handler);
      };
    }, []);
    return position;
 };

export {
  useCounter,
  useAsync,
  useScroll
}




