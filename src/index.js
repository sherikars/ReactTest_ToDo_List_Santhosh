import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { toDoStore } from "../src/store";

ReactDOM.render(
  <Provider store={toDoStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
