import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./assets/css/base/base.css";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Page404 from "./pages/Page404";
import Cabecalho from "./components/Cabecalho";
import Post from "./pages/Post";
import Categoria from "./components/Categoria";

function App() {
  return (
    <BrowserRouter>
      <Cabecalho />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/sobre">
          <Sobre />
        </Route>
        <Route path="/posts/:id">
          <Post />
        </Route>
        <Route path="/categoria/:id">
          <Categoria />
        </Route>
        <Route>
          <Page404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
