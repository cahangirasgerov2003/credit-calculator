import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./store/configStore";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

// Icon
import "remixicon/fonts/remixicon.css";

import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { pullDb } from "./actions/usersActions";
// import { pullDb } from "./actions/usersActions";

const root = ReactDOM.createRoot(document.getElementById("root"));

store.dispatch(pullDb()).catch((error) => {
  alert({ error });
});

root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
