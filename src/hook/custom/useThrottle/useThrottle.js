import { useState, useRef, useEffect } from 'react';

// 防抖 非立即执行版
const useDebounce = (value, time) => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {

    const timeOut = setTimeout(() => {
      setDebounceValue(value);
    }, time);

    return () => {
      clearTimeout(timeOut);
    };

  }, [value, time]);
  console.log('debounceValue', debounceValue);
  return debounceValue;
};

// 防抖立即执行版
const useDebounce1 = (value, time) => {
  const [debounceValue, setDebounceValue] = useState(value);
  const { current } = useRef({timer:null})
  useEffect(() => {
    console.log('current.timer2', current.timer);
    const callNow = !current.timer

    current.timer = setTimeout(() => {
      current.timer = null
    }, time);

    if(callNow){
      setDebounceValue(value);
    }

    return () => {
      clearTimeout(current.timer);
      console.log('current.timer1', current.timer);
    };
  }, [value, time]);
  console.log('debounceValue', debounceValue);
  return debounceValue;
};



// 节流
const useThrottle = (value, time) => {
  const [throttleValue, setThrottleValue] = useState(value)
  const { current } = useRef({timer:null})
  useEffect(() =>{

    if(current.timer){
      return
    }
    current.timer = setTimeout(() =>{
      setThrottleValue(value)
      current.timer = null
    }, time)

  }, [value, time])
  console.log('throttleValue', throttleValue);
  return throttleValue
  
};

export { useDebounce, useDebounce1, useThrottle };
