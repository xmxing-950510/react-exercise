import './App.scss';
import { ShowTheLocationWithRouter } from './components/router'
import { Clock, Toggle, LoginControl, NameForm, Reservation, 
  WelcomeDialog, SplitPane, DynamicContext, NestContext, MultiContext,
  SignUpDialog, ContextDemo, OldContext} from './components/react-document'
import { Table, Step, Menu } from './components/ant-design'
import { Brother, Ref, ComponentRef, CustomTextInput, ForwardRef, Lifecycle } from './components/func'


function App() {
  return (
    <div className="App">
      {/* <ShowTheLocationWithRouter /> */}
      {/* <Clock /> */}
      {/* <ForwardRef /> */}
      <Lifecycle />
    </div>
  );
}

export default App;
