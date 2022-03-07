import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";

import Favories from "./pages/Favories";
import Search from "./pages/Search";
import Trending from "./pages/Trending";
import Movies from "./pages/Movies";
import Trailor from "./pages/Trailor";

import Description from "./pages/Description";

const App = () => {
  return (
    <BrowserRouter>
      {/* <Header /> */}

      <Switch>
        <Route exact path="/">
          <Movies />
        </Route>
        <Route path="/search" component={<Search />} />
        <Route path="/favories" component={Favories} />

        <Route path="/trending" component={<Trending />} />

        <Route path="/description/:title">
          <Description />
        </Route>
        <Route path="/trailor/:video">
          <Trailor />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
