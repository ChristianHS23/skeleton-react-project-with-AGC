/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Route, Switch } from "react-router-dom";

import { Home } from "container/pages";

const App = () => (
  <Switch>
    <Route key={1} path="/" component={Home} exact />
  </Switch>
);

export default App;
