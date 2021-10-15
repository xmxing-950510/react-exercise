/**
 * 组合 vs 继承 （类似vue插槽）
 * @param {*} props 
 * @returns 
 */
function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <SplitPane
      left={
        <Contacts />
      }
      right={
        <Chat />
      } />
  );
}

function Chat() {
  return (
    <h2>Chat</h2>
  )
}

function Contacts() {
  return (
    <h2>Contacts</h2>
  )
}