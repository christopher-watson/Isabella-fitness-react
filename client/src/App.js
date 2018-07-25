import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./containers/Home";
import Clients from "./containers/Clients";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/clients" component={Clients} />
        <Route
          render={() => <h1 className="text-center">Page Not Found!</h1>}
        />
      </Switch>
    </div>
  </Router>
);

export default App;
