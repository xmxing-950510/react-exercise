import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// route props 有三个参数 match, location and history
// All route props (match, location and history) are available to User
function User(props) {
  console.log('match', props.match);
  console.log('location', props.location);
  console.log('history', props.history);
  return <h1>Hello {props.match.params.username}!</h1>;
}

export default function App() {
  return (
    <Router>
      <div>
        <div className="title">route props</div>
        <div>动态路由, location: /user/:username</div>

        <Route path="/user/:username" component={User} />
      </div>
    </Router>
  )
}