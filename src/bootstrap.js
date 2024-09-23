import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./components/app";
import AddBook from "./components/add-book";
import Navbar from "./components/navbar";

import "./style/main.scss";

function main() {
  ReactDOM.render(
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/add-book">
          <AddBook />
        </Route>
      </Switch>
    </BrowserRouter>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
