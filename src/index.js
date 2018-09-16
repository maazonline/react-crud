import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {Route, IndexRoute, Router, history} from "react-router";

import {BrowserRouter} from "react-router-dom";

import registerServiceWorker from "./registerServiceWorker";
import {Provider} from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
