import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";

import Header from "./Header";
import Home from "./Home";
import JobList from "./JobList";
import JobDetail from "./JobDetail";

function App() {
  return (
    <Router history={history}>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/joblist" exact component={JobList} />
        <Route path="/jobdetail/:id" exact component={JobDetail} />
      </Switch>
    </Router>
  );
}

export default App;
