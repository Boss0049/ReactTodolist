import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import App1 from "./App1.js";
import Card from "./Card.js";
import Input from "./Input.js";
import ToDolist from "./ToDoList.js";
import "bootstrap/dist/css/bootstrap.min.css";
import TestToDo from "./TestToDo";
import { Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <div className="App">
          <Input></Input>
          <Link to="/app">app</Link>
          {/* <Card></Card> */}
          <TestToDo></TestToDo>
          {/* <App1></App1> */}
        </div>
      </Route>
      <Route path="/app">
        <ToDolist></ToDolist>
      </Route>
      <Route path="/hello">
        <TestToDo></TestToDo>
      </Route>
    </Switch>
  );
}

export default App;
