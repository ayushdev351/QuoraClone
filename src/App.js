import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import MainScreen from "./Components/MainScreen.js";
import Login from "./Components/Login.js";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/Login" component={Login} />
        <Route path="/" component={MainScreen} exact />
      </div>
    </Router>
  );
}
