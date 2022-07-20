import React, { Component } from "react";
import Home from "./pages/home/Home";
import Topbar from "./components/topbar/Topbar";
import SinglePost from "./pages/home/single/Single";
import Login from "./pages/home/login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //1- logged in
      //0- logged out
      auth: 0,
    };
  }
  loginHandler = () => {
    this.setState({ auth: !this.state.auth });
  };
  render() {
    return (
      <Router>
        <Topbar login={this.loginHandler} status={this.state.auth} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/posts/:id">
            <SinglePost />
          </Route>
        </Switch>
      </Router>
    );
  }
}
export default App;
