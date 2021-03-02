import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./components/auth/login";
import Signup from "./components/auth/signup";
class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        {/* <Redirect exact from="/" to="" /> */}
      </Switch>
    );
  }
}

export default App;
