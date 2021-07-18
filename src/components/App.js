import Banner from "./Banner";
import logo from "../assets/logo5.png";
import SignupForm from "./SignupForm";

import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";

function App() {
  const name = "John Doe";
  const isAuthenticated = true;
  return (
    <div>
      <Banner>
        <div className="ban-groupe-logo">
          <img className="ban-logo" src={logo} alt="La maison jungle" />
          <h1 className="ban-title">Groupomania</h1>
        </div>
        <h2 className="ban-soustitre">Votre réseau social d'entreprise</h2>
      </Banner>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Signup</Link>
              </li>
              <li>
                <Link to={`/about/${name}`}>About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          {/* <Route path="/" render={() => <h1>Welcome!</h1>} /> */}
        </div>
        <Switch>
          <Route path="/" exact component={SignupForm} />
          {isAuthenticated ? (
            <>
              <Route path="/about/:name" component={About} />
              <Route path="/contact" component={Contact} />
            </>
          ) : (
            <Redirect to="/" />
          )}
        </Switch>
      </Router>
    </div>
  );
}

// Home Page
// const Home = () => (
//   <Fragment>
//     <h1>Home</h1>
//     <FakeText />
//   </Fragment>
// );
// About Page
const About = ({
  match: {
    params: { name },
  },
}) => (
  <Fragment>
    {name !== "John Doe" ? <Redirect to="/" /> : null}
    <h1>About {name} </h1>
    <FakeText />
  </Fragment>
);
// Contact Page
const Contact = ({ history }) => (
  <Fragment>
    <h1>Contact</h1>
    <button onClick={() => history.push("/")}>Go to home</button>
    <FakeText />
  </Fragment>
);
const FakeText = () => (
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
);

export default App;
