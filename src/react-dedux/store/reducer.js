
// 定义 Store 的初始值
const initialState = { value: 0 }

const counterReducer = (state = initialState, action) => {
  switch (action.type) { 
    case 'counter/incremented': 
      return { value: state.value + 1 } 
    case 'counter/decremented': 
      return { value: state.value - 1 } 
    default: 
      return state 
  }
}

export default counterReducer