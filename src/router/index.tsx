import React from "react";
import { Route, Switch } from "react-router-dom";

// import components
import { Home } from "../components/container/pages/Home";
import { HealthCheck } from "../components/container/pages/HealthCheck";

export function AppRouter() {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/health_check" component={HealthCheck}/>
    </Switch>
  );
}
