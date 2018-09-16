import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";
import {connect} from "react-redux";
import AppBar from "./components/appBar";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {Switch, Route, IndexRoute, Router, history} from "react-router";

import list from "./components/list";
import detail from "./components/detail";

import {Main} from "./components/main";


class App extends Component {

  render() {
    return (
      <MuiThemeProvider>

      <div className="App">
        <AppBar />
        <div className="container" style={{display:'flex', justifyContent:'center'}}>
          <Switch>
            <Route exact path="/posts" component={list} />
            <Route exact path="/post/new" component={detail} />
            <Route exact path="/post/:postId" component={detail} />
          </Switch>
        </div>
      </div>
      </MuiThemeProvider>

    );
  }
}

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
