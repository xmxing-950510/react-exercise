import './App.scss'
import { ShowTheLocationWithRouter } from './components/router'
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

import FuncComponent from './components/react-document/function-componet/self-hook/index2'

function App () {
  return (
    <div className="App">
      {/* <ShowTheLocationWithRouter /> */}
      {/* <Clock /> */}
      <ReduxDemo />
      {/* <Lifecycle /> */}
    </div>
  )
}

export default App
