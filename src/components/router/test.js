import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          {/* If the current URL is /about, this route is rendered
              while the rest are ignored */}
          <Route path="/about">
            <About />
          </Route>

          {/* Note how these two routes are ordered. The more specific
              path="/contact/:id" comes before path="/contact" so that
              route will render when viewing an individual contact */}
          <Route path="/contact/:id">
            <Contact />
          </Route>
          <Route path="/contact">
            <AllContacts />
          </Route>

          {/* If none of the previous routes render anything,
              this route acts as a fallback.

              Important: A route with path="/" will *always* match
              the URL because all URLs begin with a /. So that's
              why we put this one last of all */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

function About () {
  return (<div>about</div>)
}

function Home () {
  let match = useRouteMatch()
  console.log('home', match);
  return (<div>Home</div>)
}

function Contact () {
  return (<div>Contact</div>)
}

function AllContacts () {
  let match = useRouteMatch()
  console.log('AllContacts', match);
  return (<div>AllContacts</div>)
}