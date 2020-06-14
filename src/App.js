import React from "react";
import Homepage from "./Pages/HomePage";
import NavBar from "./Components/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Aboutpage from "./Pages/AboutPage";
import Articlepage from "./Pages/ArticlePage";
import Articlelistpage from "./Pages/ArticleListPage";
import { logo } from "./logo.png";

import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <img src={logo} />
        <div id="page-body">
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/article-list">
            <Articlelistpage />
          </Route>
          <Route path="/article/:name">
            <Articlepage />
          </Route>
        </div>
        <Route path="/about">
          <Aboutpage />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
