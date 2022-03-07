/**
 * useThrottle测试使用
 */

import { Input } from 'antd';
import React, { useState } from 'react';
import {useDebounce, useDebounce1, useThrottle} from './useThrottle';


function App (){
  const [val, setVal] = useState('')

  const handleChange = (e) => {
    setVal(e.target.value)
  }

  const throttleValue = useDebounce(val, 500)
  

  return (
  <div style={{width: '300px'}}>
     <h3>Throttle</h3>
     <div>
      <Input onChange={handleChange}/> 
     </div>
    
    <div>值: {throttleValue}</div>
  </div>
  )
}

export default App