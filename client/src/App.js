import React from "react";
import Jobs from "./containers/Jobs";
import Job from "./containers/Job";
import GraphqlProvider from "./graphql/Provider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <GraphqlProvider>
      <Router>
        <Switch>
          <Route path="/job/:id">
            <Job />
          </Route>
          <Route path="/">
            <Jobs />
          </Route>
        </Switch>
      </Router>
    </GraphqlProvider>
  );
};

export default App;
