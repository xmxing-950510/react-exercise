import './App.scss'
import { NestedRouting } from './react-router'
import {
 Clock, Toggle, LoginControl, NameForm, Reservation, 
  WelcomeDialog, SplitPane, DynamicContext, NestContext, MultiContext,
  SignUpDialog, ContextDemo, OldContext } from './components/react-document'
import { Table, Step, Menu } from './components/ant-design'
import {
 Brother, Ref, ComponentRef, CustomTextInput, ForwardRef, Lifecycle,
  AntdRef 
} from './components/func'
import ReduxDemo from './react-redux'
import Communication from './father-child/event'

import FuncComponent from './components/react-document/function-componet/forwardRef'
import ContextComponent from './components/react-document/context/dynamic-context'

function App () {
  return (
    <div className="App">
      {/* <ShowTheLocationWithRouter /> */}
      <NestedRouting />
      {/* <ReduxDemo /> */}
      {/* <Lifecycle /> */}
    </div>
  )
}

export default App
