import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CardDatabase from "./pages/CardDatabase";
import CardbackDatabase from "./pages/CardbackDatabase";
import GlobalStyle from "./theme/GlobalStyle";

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cards" element={<CardDatabase />}></Route>
        <Route path="/cardbacks" element={<CardbackDatabase />}></Route>
      </Routes>
    </Fragment>
  );
};

export default App;
