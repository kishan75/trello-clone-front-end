import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "./components/auth/login";
import Signup from "./components/auth/signup";
import Boards from "./components/board/boards";
class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/board" component={Boards} />
        <Redirect exact from="/" to="/board" />
      </Switch>
    );
  }
}

export default App;
