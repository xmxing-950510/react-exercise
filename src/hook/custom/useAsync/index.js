
import { getDefaultNormalizer } from "@testing-library/react";
import React, { useEffect } from "react";
import useAsync from './useAsync';

export default function UserList() {
  // 通过 useAsync 这个函数，只需要提供异步逻辑的实现
  const {
    execute,
    data,
    loading,
    error,
  } = useAsync(async () => {
    const res = await fetch("https://reqres.in/api/users/");
    console.log('async res', res);
    const json = await res.json();
    // return json.data;
  });
  useEffect(() => {
    console.log('useEffect');
    execute()
  }, [])

  const getData = () => {
    execute()
  }

  return (
    // 根据状态渲染 UI...
    
    <div>
      <h3 onClick={getData}>数据更新</h3>
      {
        data && data.length > 0 && data.map(element => {
          console.log(element);
          return <div>{element.email}</div>
        })
      }
    </div>
  );
}