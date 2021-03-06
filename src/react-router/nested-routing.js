/**
 * 嵌套路由
 */
import React from "react";
import { Button } from "antd";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  Redirect
} from "react-router-dom";
import './index.scss'
import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";

export default function App() {
  return (
    <Router>
      <div>
        <div className='title'>nested routing</div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <BlogPost />
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Topics() {
  let match = useRouteMatch();
  let history = useHistory()
  console.log('topics', match);

  const handleLink = () =>{
    history.push('/blog/aa', {
      name: 'aaa',
      msg: 'nihao'
    })
  }
  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>
      <Button onClick={() => {handleLink()}}>跳转到 /blog/aa</Button>
      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
      
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  let match = useRouteMatch();
  console.log('topic', match);
  return <h3>Requested topic ID: {topicId}</h3>;
}

function BlogPost() {
  let match = useRouteMatch("/blog/:slug");
  let location = useLocation()
  console.log('match', match);
  console.log('location', location);
  // Do whatever you want with the match...
  return (
    <div>
      {
        match && <div>
        BlogPost1
      </div>
      }
    </div>
    
  )
}