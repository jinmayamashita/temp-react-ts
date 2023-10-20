import { Switch, Route } from "wouter";
import HomePage from "./components/home-page";
import CountPage from "./components/count-page";

export default () => (
  <Switch>
    <Route path="/count">
      <CountPage />
    </Route>
    <Route path="/">
      <HomePage />
    </Route>
    <Route>404, Not Found</Route>
  </Switch>
);
