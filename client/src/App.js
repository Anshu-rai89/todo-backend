import logo from "./logo.svg";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import Signup from "./component/Signup";
import Signin from "./component/Signin";
import Navbar from "./component/navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/signup" exact>
            <Signup />
          </Route>
          <Route path="/signin" exact>
            <Signin />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
