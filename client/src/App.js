import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./containers/Home";
import Clients from "./containers/Clients";
import Login from "./containers/Login";
import Logout from "./containers/Logout";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/clients" component={Clients} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
        <Route render={() => <h1 className="text-center mt-5">Page Not Found!</h1>} />
      </Switch>
    </div>
  </Router>
);

export default App;
