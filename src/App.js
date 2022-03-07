import './App.scss'
import { NestedRouting } from './react-router'
import {
 Clock, Toggle, LoginControl, NameForm, Reservation, 
  WelcomeDialog, SplitPane, DynamicContext, NestContext, MultiContext,
  SignUpDialog, ContextDemo, OldContext,
  
 } from './react-document'
import { Table, Step, Menu } from './components/ant-design'
import {
 Brother, Ref, ComponentRef, CustomTextInput, ForwardRef, Lifecycle,
  AntdRef 
} from './components/func'
import ReduxDemo from './react-redux'
import Communication from './father-child/event'
import Count from './hook/custom/count'
import Async from './hook/custom/useAsync'
import UseRefDemo from './hook/useRef'
// import ScrollHook from './hook/custom/useScroll'

import FuncComponent from './react-document/function-componet/forwardRef'
import ContextComponent from './react-document/context/dynamic-context'

import RenderProps from './react-document/render-props'
import Throttle from './hook/custom/useThrottle'

function App () {
  return (
    <div className="App">
      <Throttle />
      {/* <UseRefDemo /> */}
    </div>
  )
}

export default App
