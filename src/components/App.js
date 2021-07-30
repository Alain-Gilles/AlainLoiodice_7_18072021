import Banner from "./Banner";
import logo from "../assets/logo5.png";
import SignupForm from "./SignupForm";
import About from "./About";
import LoginForm from "./LoginForm";
import GetAllMessages from "./GetAllMessages";
import CreatMess from "./CreatMess";
import AffichUnMessage from "./AffichUnMessage";
import GetUnMessage from "./GetUnMessage";
import GetAllUsers from "./GetAllUsers";
import ModifUnMessage from "./ModifUnMessage";
import SupprUnMessage from "./SupprUnMessage";
import "../styles/App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";

function App() {
  const name = "John Doe !";
  const trtOk = false;
  let isAuthenticated = true;

  const [validAuth, SetValidAuth] = React.useState(false);

  // let lc = localStorage.getItem("AccMe");
  // console.log("lc  ", lc);
  // let isAuthenticated = false;
  // if (lc == "true") {
  //   isAuthenticated = true;
  // } else {
  //   isAuthenticated = false;
  // }
  // console.log("isAuthenticated", isAuthenticated);

  return (
    <div className="bloc-App">
      <Banner>
        <div className="ban-groupe-logo">
          <img className="ban-logo" src={logo} alt="Groupomania" />
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
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/allUsers">User List</Link>
              </li>
              <li>
                <Link to={`/about/${name}`}>About</Link>
              </li>
            </ul>
          </nav>
          {/* <Route path="/" render={() => <h1>Welcome!</h1>} /> */}
        </div>
        <Switch>
          {/* <Route path="/" exact component={SignupForm} /> */}
          <Route
            path="/"
            exact
            render={(props) => <SignupForm {...props} validAuth={false} />}
          />

          {/* <Route path="/login" component={LoginForm} /> */}
          <Route
            path="/login"
            render={(props) => <LoginForm {...props} validAuth={false} />}
          />

          {isAuthenticated ? (
            <>
              <Route path="/allUsers" component={GetAllUsers} />
              <Route path="/allMessages" component={GetAllMessages} />
              <Route path="/unMessage/:id/:userId" component={GetUnMessage} />
              <Route path="/affichUnMessage" component={AffichUnMessage} />
              <Route path="/creatMessage" component={CreatMess} />
              <Route path="/modifUnMessage" component={ModifUnMessage} />
              <Route path="/supprUnMessage" component={SupprUnMessage} />
              <Route path="/about/:name" component={About1} />
            </>
          ) : (
            <Redirect to="/" />
          )}
        </Switch>
      </Router>
    </div>
  );
}

const About1 = ({
  match: {
    params: { name },
  },
}) => About(name);

export default App;
