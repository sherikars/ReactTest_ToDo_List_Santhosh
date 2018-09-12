import React, { Component } from "react";
import "./App.css";
import { Router, Route } from "react-router-dom";
import { ToDoListComponent } from "../src/components/ToDoListComponent";
import { ToDoEditComponent } from "../src/components/ToDoEditComponent";
import { toDoHistory } from "../src/helpers";

class App extends Component {
  render() {
    return (
      <Router history={toDoHistory}>
        <div>
          <Route exact path="/" component={ToDoListComponent} />
          <Route exact path="/:id" component={ToDoEditComponent} />
        </div>
      </Router>
    );
  }
}

export default App;
